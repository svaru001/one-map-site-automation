import HomePage from '../../pages/map.home.page'
import ThemePage from '../../pages/theme.page'
describe('Homepage Field Validation', () => {
    before(()=>{
        browser.maximizeWindow()
        HomePage.open()
        HomePage.searchBox.setValue('Pasir Ris Beach Park')
        HomePage.searchResult.waitForDisplayed()
        HomePage.searchResult.click()
        HomePage.resultSideMenu.waitForDisplayed()
    })

    it('Should navigate to electoral devision page from navigation menu', () => {
       HomePage.electrolDivisionButton.click()
       expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/electoraldivision')
    })
    it('Should navigate to Nearby Park page page from navigation menu', () => {
        HomePage.nearByParksButton.click()
        HomePage
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/nearbyparks')
    })
    it('Should navigate to Essential Aminities page from navigation menu', () => {
        HomePage.essentialAmmenitiesButton.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/essentialamenities')
    })
    it('Should navigate to School information page from navigation menu', () => {
        HomePage.schoolQueryButton.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/schoolquerymenu')
    })
    it('Should navigate to PHPC page from navigation menu', () => {
        HomePage.phpcNearYouButton.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/phpcmap')
    })
})