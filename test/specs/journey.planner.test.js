import HomePage from '../../pages/map.home.page'
import ThemePage from '../../pages/theme.page'
const testData = require('../../data/testdata.json')
const assert = require('assert')

describe('Journey Planner', () => {
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
        browser.pause(1000)
        HomePage.routeButton.click()
        HomePage.destinationInput.setValue(testData[0]['destination'])
        HomePage.destinationSearchResult.waitForDisplayed()
        HomePage.destinationSearchResult.click()
    })
    it('Should mark source on map when journey is planned', () => {
        expect(HomePage.sourceIcon).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should mark source on map when journey is planned.png')
    });
    it('Should mark destination on map when journey is planned ', () => {
        expect(HomePage.destinationIcon).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should mark destination on map when journey is planned.png')
    });
    it('Should display Transit Route options on map', () => {
        expect(HomePage.transitDetails).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should display Transit Route options on map.png')
    });
    it('Should display Bus Route options on map', () => {
        HomePage.journeyBusButton.click()
        expect(HomePage.transitDetails).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should display Bus Route options on map.png')
    });
    
});