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
    it('Should display destination when search and hit enter ', () => {
        expect(HomePage.resultPopupAddress).toBeDisplayed();
    });
    it('Should show nearby MRT Station when Searched for a location', () => {
       expect(HomePage.nearbyMrtStations).toBeDisplayed();
    });
    it('Should show near by Bus Stops when Searched for a location', () => {
        expect(HomePage.nearbyBusStops).toBeDisplayed();
    });
    it('Should show near by Car Parks when Searched for a location', () => {
        expect(HomePage.nearbyCarParks).toBeDisplayed()
    });
    it('Should show near by DBS ATMs when Searched for a location', () => {
        expect(HomePage.nearbyDbsAtms).toBeDisplayed()
    });
    it('Should show near by UOB ATMs when Searched for a location', () => {
        expect(HomePage.nearbyUobAtms).toBeDisplayed()
    });
    it('Should show near by OCBC ATMs when Searched for a location', () => {
        expect(HomePage.nearbyOcbcAtms).toBeDisplayed()
    });
    it('Should show near by Hawker Centres when Searched for a location', () => {
        expect(HomePage.nearbyHawkerCentres).toBeDisplayed()
    });
    it('Should show near by HealthCare Community Centres when Searched for a location', () => {
        expect(HomePage.nearbyHealthCareCommunityCentres).toBeDisplayed()
    });
    it('Should show attractions when clicked on attractions bottom link when Searched for a location ', () => {
        HomePage.attractionsLink.click()
        expect(ThemePage.themeAttractions).toBeDisplayed()
        browser.back()
        HomePage.waitForPageToLoad()
        browser.pause(200)
    });
    it('Should show aminities when clicked on aminities bottom link ', () => {
        HomePage.aminitiesLink.click()
        expect(ThemePage.themeAminities).toBeDisplayed()
        browser.back()
        HomePage.waitForPageToLoad()
    });
    it('Should show healthcare when clicked on healthcare bottom link ', () => {
        HomePage.healthcareLink.click()
        expect(ThemePage.themeHealth).toBeDisplayed()
        browser.back()
        HomePage.waitForPageToLoad()
    });
    it('Should show transport when clicked on transport bottom link ', () => {
        HomePage.transportLink.click()
        expect(ThemePage.themeTransport).toBeDisplayed()
        browser.back()
        HomePage.waitForPageToLoad()
    });
    it('Should take user to theme page  when clicked on More bottom link ', () => {
        HomePage.viewMoreLink.click()
        expect(browser).toHaveUrl('https://www.onemap.sg/main/v2/themes')
    });
});