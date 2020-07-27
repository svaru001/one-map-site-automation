import HomePage from '../../pages/map.home.page'
import ThemePage from '../../pages/theme.page'
const testData = require('../../data/testdata.json')
describe('Homepage Navigation', () => {
    before(()=>{
        browser.maximizeWindow()
        HomePage.open()
        HomePage.searchBox.setValue(testData[0]['source'])
        if(!HomePage.searchResult.waitForDisplayed())
        {   HomePage.searchBox.clearValue()
            HomePage.searchBox.setValue(testData[0]['source'])
        }
        HomePage.searchResult.click()
        HomePage.resultSideMenu.waitForDisplayed()
    })

    it('Should navigate to electoral devision page from navigation menu', () => {
       HomePage.electrolDivisionButton.click()
       expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/electoraldivision')
       browser.saveScreenshot('data/screenshots/Should navigate to electoral devision page from navigation menu.png')
    })
    it('Should navigate to Nearby Park page page from navigation menu', () => {
        HomePage.nearByParksButton.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/nearbyparks')
        browser.saveScreenshot('data/screenshots/Should navigate to Nearby Park page page from navigation menu.png')
    })
    it('Should navigate to Essential Aminities page from navigation menu', () => {
        HomePage.essentialAmmenitiesButton.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/essentialamenities')
        browser.saveScreenshot('data/screenshots/Should navigate to Essential Aminities page from navigation menu.png')
    })
    it('Should navigate to School information page from navigation menu', () => {
        HomePage.schoolQueryButton.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/schoolquerymenu')
        browser.saveScreenshot('data/screenshots/Should navigate to School information page from navigation menu.png')
    })
    // it('Should navigate to PHPC page from navigation menu', () => {
    //     HomePage.phpcNearYouButton.click()
    //     expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/phpcmap')
    //     browser.saveScreenshot('data/screenshots/Should navigate to PHPC page from navigation menu.png')
    // })
})