Feature('Test3');

/* Создать папку на диске, внутри папки создать файл, удалить файл в корзину,
 восстановить файл из корзины, удалить файл и папку*/

const folder = 'folder3';
const file = 'file3';
const pathToFolder = `/`;
const pathToFile = `/${folder}`;
const pathToObjInBasket = '/'

Scenario('Test3', async({ APIYandex, Basket }) => {
    await APIYandex.createFolder(pathToFolder, folder);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.createFileByPath(pathToFile, file);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.deleteFileToBasket(pathToFile, file);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await Basket.recoveryObjectFromBasket(pathToObjInBasket, file);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.deleteFolder(pathToFolder, folder);
    await Basket.deleteContentFromBasket(pathToObjInBasket, folder);
});
