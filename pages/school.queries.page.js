import Page from './page';

/**
 * School page containing specific selectors and methods for a School page
 */
class SchoolQueriesPage extends Page {

    get label() {return $('//div[contains(text(),\'SchoolQuery\')')}
    get primarySchoolbutton() {return $('button.ShowPriSchool')}
    get secondarySchoolbutton() {return $('button.ShowSecSchool')}
    get postSecondarySchoolbutton() {return $('button.ShowPostSecSchool')}
    get iAgreeButton() {return $('//label[contains(text(),\'I Agree\')]')}
    get nearestBuildingWithin1Km() {return $('div[ng-repeat="s in schoolNearOneKm"] button')}
    get nearestBuildingWithin1to2Km() {return $('div[ng-repeat="s in schoolNearTwoKm"] button')}
}

export default new SchoolQueriesPage();


