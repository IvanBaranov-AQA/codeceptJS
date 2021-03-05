Feature('Navigation');

Scenario.skip('StepNavigation', ({ homePage }) => {
    const data = ['video', 'images', 'news', 'maps', 'market', 'translate', 'tv', 'music', 'tvonline'];
    for(let i = 0; i < data.length; i++) {
        homePage.followDataLink(data[i])
    }
});
