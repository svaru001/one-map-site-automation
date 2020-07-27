import Page from './page';

/**
 * This file contain page object selectors and methods for page - Essential Amimities Page
**/
class EssentialAmimitiesPage extends Page {

    get allAminities() {return $$('div.theme-group.ng-scope')}
    get firstAminity() {return $('div.theme-group.ng-scope')}
    get atms() {return $('//div[contains(text(),\'ATMs\')]')}
}

export default new EssentialAmimitiesPage();


