import HomePage from '../../pages/map.home.page'
import ThemePage from '../../pages/theme.page'
const testData = require('../../data/testdata.json')

describe('Search', () => {
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
    it('Should display destination when search and hit enter', () => {
        expect(HomePage.resultPopupAddress).toBeDisplayed();
        browser.saveScreenshot('data/screenshots/Should display destination when search and hit enter.png')
    });
    it('Should show nearby MRT Station when Searched for a location', () => {
       expect(HomePage.nearbyMrtStations).toBeDisplayed();
       browser.saveScreenshot('data/screenshots/Should show nearby MRT Station when Searched for a location.png')
    });
    it('Should show near by Bus Stops when Searched for a location', () => {
        expect(HomePage.nearbyBusStops).toBeDisplayed();
        browser.saveScreenshot('data/screenshots/Should show near by Bus Stops when Searched for a location.png')
    });
    it('Should show near by Car Parks when Searched for a location', () => {
        expect(HomePage.nearbyCarParks).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show near by Car Parks when Searched for a location.png')
    });
    it('Should show near by DBS ATMs when Searched for a location', () => {
        expect(HomePage.nearbyDbsAtms).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show near by DBS ATMs when Searched for a location.png')
    });
    it('Should show near by UOB ATMs when Searched for a location', () => {
        expect(HomePage.nearbyUobAtms).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show near by UOB ATMs when Searched for a location.png')
    });
    it('Should show near by OCBC ATMs when Searched for a location', () => {
        expect(HomePage.nearbyOcbcAtms).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show near by OCBC ATMs when Searched for a location.png')
    });
    it('Should show near by Hawker Centres when Searched for a location', () => {
        expect(HomePage.nearbyHawkerCentres).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show near by Hawker Centres when Searched for a location.png')
    });
    it('Should show near by HealthCare Community Centres when Searched for a location', () => {
        expect(HomePage.nearbyHealthCareCommunityCentres).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show near by HealthCare Community Centres when Searched for a location.png')
    });
    it('Should show attractions when clicked on attractions bottom link when Searched for a location', () => {
        HomePage.attractionsLink.click()
        expect(ThemePage.themeAttractions).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show attractions when clicked on attractions bottom link when Searched for a location.png')
        browser.back()
        HomePage.waitForPageToLoad()
        browser.pause(200)
    });
    it('Should show aminities when clicked on aminities bottom link', () => {
        HomePage.aminitiesLink.click()
        expect(ThemePage.themeAminities).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show aminities when clicked on aminities bottom link.png')
        browser.back()
        HomePage.waitForPageToLoad()
        browser.pause(200)
    });
    it('Should show healthcare when clicked on healthcare bottom link', () => {
        HomePage.healthcareLink.waitForDisplayed()
        HomePage.healthcareLink.click()
        expect(ThemePage.themeHealth).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show healthcare when clicked on healthcare bottom link.png')
        browser.back()
        HomePage.waitForPageToLoad()
        browser.pause(200)
    });
    it('Should show transport when clicked on transport bottom link', () => {
        HomePage.transportLink.click()
        expect(ThemePage.themeTransport).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should show transport when clicked on transport bottom link.png')
        browser.back()
        HomePage.waitForPageToLoad()
        browser.pause(200)
    });
    it('Should take user to theme page  when clicked on More bottom link', () => {
        HomePage.viewMoreLink.waitForDisplayed()
        HomePage.viewMoreLink.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/themes')
        browser.saveScreenshot('data/screenshots/Should take user to theme page  when clicked on More bottom link.png')
    });
});