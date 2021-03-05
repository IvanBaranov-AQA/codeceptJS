Feature('Test2');

/* Создать папку на диске, внутри папки создать файл, удалить файл в корзину,
 удалить папку*/

const folder = 'folder2';
const file = 'file2';
const pathToFolder = `/`;
const pathToFile = `/${folder}`;
const pathToObjInBasket = '/'

Scenario('Test2', async({ APIYandex, Basket }) => {
    await APIYandex.createFolder(pathToFolder, folder);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.createFileByPath(pathToFile, file);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.deleteFileToBasket(pathToFile, file);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.deleteFolder(pathToFolder, folder);
    await Basket.deleteContentFromBasket(pathToObjInBasket, folder);
    await Basket.deleteContentFromBasket(pathToObjInBasket, file);
});