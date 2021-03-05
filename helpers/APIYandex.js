//import unirest from "unirest";
const unirest = require('unirest');
const fetch = require('whatwg-fetch');
const assert = require('assert');

module.exports = {


    pathToFileAndFolder: 'https://cloud-api.yandex.net/v1/disk/resources',
  //  pathToBasket: 'https://cloud-api.yandex.net/v1/disk/trash/resources',
    header: {Accept: 'application/json', Authorization: 'OAuth AgAAAAA2Kt04AAbbNxv8krhv6EH1u6ExiIl2NBk'},
    baseFieldsToFolder: '&fields=name%2C%20path%2C%20_embedded',
    imageByUrl: 'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg',
    hrefAsyncOperation: 'https://cloud-api.yandex.net/v1/disk/operations/',

// introducing methods
        async createFolder(path, folder) {
            const response = await unirest.put(`${this.pathToFileAndFolder}?path=${path}${folder}`)
                .header(this.header)
            if (response.ok) {
                console.log(`Status: ${response.status} (Folder: ${folder} created in ${path})`)
            } else {
                console.log('HTTP Error:', response.status)
                console.log(response.body)
                throw new Error('Error')
            }
        },

    // async createFolderByPath(folder, path) {
    //     const path = await unirest
    //         .get(`${this.pathToFileAndFolder}?path=%2F${path}${this.baseFieldsToFolder}`)
    //         .header(this.header)
    //     const response = await unirest.put(`${this.pathToFileAndFolder}?path=%2F${folder1}%2F${folder2}`)
    //         .header(this.header)
    //     if (response.ok) {
    //         console.log(`Status: ${response.status} (Folder ${folder2} created in ${folder1})`)
    //     } else {
    //         console.log('HTTP Error:', response.status)
    //         console.log(response.body)
    //         throw new Error('Error')
    //     }
    // },
    async createFileByPath(path, nameFile) {
        const response = await unirest.post(`${this.pathToFileAndFolder}/upload?path=${path}/${nameFile}&url=${this.imageByUrl}`)
            .header(this.header)
        if (response.ok) {
            console.log(`Status: ${response.status} (File: ${nameFile} begin created in ${path})`)
            console.log(response.body);
            const idAsyncOper = response.body.href.slice(48);
            return new Promise((resolve, reject) => {
                setTimeout(async () => {
                    resolve (this.getIdAsyncOperation(idAsyncOper)
                )}, 4000);
            });
        } else {
            console.log('HTTP Error:', response.status)
            console.log(response.body)
            throw new Error('Error')
        }
    },

    // async getSuccessCreateFile (idAsyncOper) {
    //     let delay = 1000;
    //     let timerId = setTimeout(() => {
    //         let status = getIdAsyncOperation(idAsyncOper)
    //         if (!status) {
    //            delay *= 2;
    //         }
    //         timerId = setTimeout(getIdAsyncOperation, delay);
    //     }, delay);
    // },


    async getIdAsyncOperation(idAsyncOper) {
        await unirest
            .get(`${this.hrefAsyncOperation}${idAsyncOper}`)
            .header(this.header)
            .end((response) => {console.log('Статус загрузки файла:', response.body.status);
                assert.strictEqual(response.body.status, 'success', 'Статус не success.');});
    },

    async deleteFolder(pathToFolder, folder) {
        const response = await unirest
            .delete(`${this.pathToFileAndFolder}?path=${pathToFolder}${folder}`)
            .header(this.header)
        if (response.ok) {
            console.log(`Status: ${response.status} (Folder: ${folder} deleted from ${pathToFolder})`)
        } else {
            console.log('HTTP Error:'+response.status)
            console.log(response.body)
            throw new Error('Error')
        }
    },

    async deleteFileToBasket(pathToFile, nameFile) {
        const response = await unirest
            .delete(`${this.pathToFileAndFolder}?path=${pathToFile}/${nameFile}`)
            .header(this.header)
        if (response.ok) {
            console.log(`Status: ${response.status} (File: ${nameFile} deleted from ${pathToFile})`)
        } else {
            console.log('HTTP Error:'+response.status)
            console.log(response.body)
            throw new Error('Error')
        }
    },

    async getInfoByPath(pathToFolder, folder) {
        const response = await unirest
            .get(`${this.pathToFileAndFolder}?path=${pathToFolder}${folder}${this.baseFieldsToFolder}`)
            .header(this.header)
        if (response.ok) {
            console.log(`Status: ${response.status} (Info about folder: ${folder} by ${pathToFolder})`)
            console.log(response.body)
        } else {
            console.log('HTTP Error:'+response.status)
            console.log(response.body)
        }
    },



    getFilesByPath() {
        unirest
            .get(`${this.pathToFileAndFolder}/files`)
            .header(this.header)
            .then((response) => {
                if (response.ok) {
                    console.log(response.body)
                } else {
                    console.log('HTTP Error:'+response.status)
                    console.log(response.body)
                }
            })
    },


}
