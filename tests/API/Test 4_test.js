const allure = codeceptjs.container.plugins('allure');
const assert = require('assert');
Feature('Test4');

/* Создать папку на диске, внутри папки создать 2 файла, удалить файлы в корзину,
 посчитать размер файлов в корзине,
 сравнить, что число файлов в корзине = первоначальному размеру + размеру файлов в корзине*/

const folder = 'folder4';
const file1 = 'file4_1';
const file2 = 'file4_2';
const pathToFolder = `/`;
const pathToFile = `/${folder}`;
const pathToObjInBasket = '/'

Scenario('Test4 @Smoke', async({ APIYandex, Basket }) => {
    const total1 = await Basket.getInfoByTotalInBasket();
    console.log('total1 =', total1);
    await APIYandex.createFolder(pathToFolder, folder);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.createFileByPath(folder, file1);
    await APIYandex.createFileByPath(pathToFile, file2);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    await APIYandex.deleteFileToBasket(pathToFile, file1);
    await APIYandex.deleteFileToBasket(pathToFile, file2);
    await APIYandex.getInfoByPath(pathToFolder, folder);
    const total2 = await Basket.getInfoByTotalInBasket();
    console.log('total2 =', total2);
    assert.strictEqual(total2, total1 + 2, 'Размер корзины не тот');
    await APIYandex.deleteFolder(pathToFolder, folder);
    allure.severity('critical')
    allure.addLabel('Fourth','четвертый')
});