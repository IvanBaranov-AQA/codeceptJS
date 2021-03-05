Feature('Test1');

/* Создать папку на диске, удалить папку в корзину,
 проверить, что папка удалилась*/
const path = `/`
const folder = 'folder1';
const pathToObjInBasket = '/'

Scenario('Test1', async({ APIYandex, Basket }) => {
    await APIYandex.createFolder(path, folder);
    await APIYandex.getInfoByPath(path, folder);
    await APIYandex.deleteFolder(path, folder);
    await APIYandex.getInfoByPath(path, folder);
    await Basket.deleteContentFromBasket(pathToObjInBasket, folder);
});