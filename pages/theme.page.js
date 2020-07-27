import Page from './page';

/**
 * This file contain page object selectors and methods for page - Theme Page
**/
class ThemePage extends Page {
    get themeLeftPanel() {return $('//div[@class=\'theme-group\']')}
    get themeAminities() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Amenities\')]')}
    get themeAttractions(){ return $('//div[@class=\'theme-group\']//a[contains(text(),\'Attractions\')]')}
    get themeAviation(){ return $('//div[@class=\'theme-group\']//a[contains(text(),\'Aviation\')]')}
    get themeCC() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Community Services\')]')}
    get themeEducationAndSkillMgmt() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Education and Skills Upgrade\')]')}
    get themeEnvironment() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Environment\')]')}
    get themeGovInstitution() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Government Institutions\')]')}
    get themeHealth() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Health\')]')}
    get themeSafetyAndSecurity() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Safety and Security\')]')}
    get themeSportsFitnessAndRecreation() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Sports, Fitness and Recreation\')]')}
    get themeTransport() { return $('//div[@class=\'theme-group\']//a[contains(text(),\'Transport\')]')}
    get themeDroneAndArialActivities() { $('//div[@class=\'theme-group\']//a[contains(text(),\'Unmanned aircraft (Drones) and Aerial Activities\')]')}

    // Methods
    waitForPageToLoad() {
        if (!this.themeLeftPanel.isDisplayed()) {
          this.themeLeftPanel.waitForDisplayed(10000)
        }
      }
      open() {
        browser.url('main/v2/themes')
      }
}
export default new ThemePage();


