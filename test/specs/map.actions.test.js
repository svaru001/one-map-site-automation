import HomePage from '../../pages/map.home.page'
import ThemePage from '../../pages/theme.page'
const assert = require('assert')
describe('Map Actions', () => {
    before(()=>{
        browser.maximizeWindow()
        HomePage.open()
        HomePage.waitForPageToLoad()
    })
    it('Should be able to zoom in when clicked on + Sign ', () => {
        let initialScaleValue=HomePage.mapScale.getText()
        initialScaleValue=initialScaleValue.substring(0, initialScaleValue.indexOf("km"))
        console.log('initial value='+initialScaleValue)
        HomePage.zoomInButton.click()
        browser.pause('1000')
        let newScaleValue= HomePage.mapScale.getText()
        newScaleValue=newScaleValue.substring(0, newScaleValue.indexOf("km"))
        console.log('new value='+newScaleValue)
        assert.notEqual(initialScaleValue,newScaleValue)
        browser.saveScreenshot('data/screenshots/Should be able to zoom in when clicked on + Sign.png')
    });
    it('Should be able to zoom out when clicked on - Sign', () => {
        let initialScaleValue=HomePage.mapScale.getText()
        initialScaleValue=initialScaleValue.substring(0, initialScaleValue.indexOf("km"))
        console.log('initial value='+initialScaleValue)
        HomePage.zoomOutButton.click()
        browser.pause('1000')
        let newScaleValue= HomePage.mapScale.getText()
        newScaleValue=newScaleValue.substring(0, newScaleValue.indexOf("km"))
        console.log('new value='+newScaleValue)
        assert.notEqual(initialScaleValue,newScaleValue)
        browser.saveScreenshot('data/screenshots/Should be able to zoom out when clicked on - Sign.png')
    });
    it('Should display notification popup when clicked on bell icon', () => {
      HomePage.notificationBellIcon.click()
      expect(HomePage.notificationPopup).toBeDisplayed()
      browser.saveScreenshot('data/screenshots/Should display notification popup when clicked on bell icon.png')
    })
    it('Should hide notification popup when clicked on bell icon again', () => {
        HomePage.notificationBellIcon.click()
        expect(HomePage.notificationPopup).not.toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should hide notification popup when clicked on bell icon again.png')
      })
    it('Should locate user\'s location when clicked on Locate Sign', () => {
        HomePage.mapToolsLocateMyCurrentPositionIcon.click()
        HomePage.locateResult.waitForDisplayed()
        expect(HomePage.locateResult).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/Should locate user location when clicked on Locate Sign.png')
    })
    
});