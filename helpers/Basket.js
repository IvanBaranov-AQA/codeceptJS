const unirest = require('unirest');
const assert = require('assert');

module.exports = {

    pathToDisk: 'https://cloud-api.yandex.net/v1/disk/resources?path=%2F',
   // pathToFiles: 'https://cloud-api.yandex.net/v1/disk/resources/files',
    pathToBasket: 'https://cloud-api.yandex.net/v1/disk/trash/resources',
    header: {Accept: 'application/json', Authorization: 'OAuth AgAAAAA2Kt04AAbbNxv8krhv6EH1u6ExiIl2NBk'},
    returnTrashPath: 'https://cloud-api.yandex.net/v1/disk/trash/resources?path=%2F&fields=_embedded.items.path',

// introducing methods

    async getPathToObjectInBasket(pathToObjInBasket, nameObj) {
        const response = await unirest
            .get(`${this.pathToBasket}?path=${pathToObjInBasket}`)
            .header(this.header);
        const items = response.body._embedded.items;
           //  console.log(response.body._embedded);
        const itemByName = items.filter(item => item.name === nameObj);
            // const path = itemByName[0].path;
            // console.log(path.slice(7));
        return itemByName[0].path.slice(7);
    },

    async recoveryObjectFromBasket(pathToObjInBasket, nameObj) {
       const response = await unirest.put(`${this.pathToBasket}/restore?path=%2F${await this.getPathToObjectInBasket(pathToObjInBasket, nameObj)}`)
            .header(this.header);
        if (response.ok) {
            console.log(`Status: ${response.status} (Object: ${nameObj} recovered)`)
        } else {
            console.log('HTTP Error:', response.status)
            console.log(response.body)
            throw new Error('Error')
        }
    },

    async deleteContentFromBasket(pathToObjInBasket, nameObj) {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                await this.getPathToObjectInBasket(pathToObjInBasket, nameObj)
                const response = await unirest
                    .delete(`${this.pathToBasket}?path=${pathToObjInBasket}${await this.getPathToObjectInBasket(pathToObjInBasket, nameObj)}`)
                    .header(this.header)
                if (response.ok) {
                    console.log(`Status: ${response.status} (Object: ${nameObj} deleted from Basket by ${pathToObjInBasket})`)
                    resolve()
                } else {
                    console.log('HTTP Error:', response.status)
                    console.log(response.body)
                    reject()
                    throw new Error('Error')
                }
              }, 4000);
        });
     },

        async deleteAllContentInBasket() {
        const response = await unirest
            .delete(`${this.pathToBasket}`)
            .header(this.header)
        console.log(response.status);
        console.log(response.body)
        },

    async getInfoByBasket(pathToObjInBasket) {
    const response = await unirest
        .get(`${this.pathToBasket}?path=${pathToObjInBasket}&fields=_embedded`)
        .header(this.header)
    if (response.ok) {
        console.log(`Status: ${response.status}`)
        console.log(response.body)
    } else {
        console.log('HTTP Error:'+response.status)
        console.log(response.body)
    }
},

    async getInfoByTotalInBasket() {
        const response = await unirest
            .get(`${this.pathToBasket}?path=%2F&fields=_embedded`)
            .header(this.header)
        if (response.ok) {
            console.log(`Status: ${response.status}`)
            console.log(response.body._embedded.total)
            return response.body._embedded.total
        } else {
            console.log('HTTP Error:'+response.status)
            console.log(response.body)
        }
    },

}