Feature('Test5');

/* Создать папку test на диске, внутри создать папку foo, внутри создать файл autotest.
Получить метаданные test и сравнить что и тип параметров соответсвует ожидаемому.
Удалить папку тест в корзину.
Проверить ,что удалилась папку test, foo и файл autotest*/

const folder1 = 'test';
const folder2 = 'foo';
const path = `%2F${folder1}%2F${folder2}`
const file = 'avtotest';

Scenario.skip('Test5', async({ APIYandex, Basket }) => {
    await APIYandex.createFolderInRoot(folder1);
    await APIYandex.createFolderInFolder(folder1,folder2);

    // await APIYandex.getInfoByPath(folder);
    // await APIYandex.createFileInFolder(folder, file);
    // await APIYandex.getInfoByPath(folder);
    // await APIYandex.deleteFileInBasket(folder, file);
    // await APIYandex.getInfoByPath(folder);
    // await Basket.recoveryObjectFromBasket(file);
    // await APIYandex.getInfoByPath(folder);
    // await APIYandex.deleteFolder(folder);
    // await Basket.deleteContentFromBasket(folder);
});
