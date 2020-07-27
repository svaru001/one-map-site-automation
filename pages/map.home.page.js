import Page from './page';

/**
 * This file contain page object selectors and methods for page - Homepage/Landing Page
**/
class HomePage extends Page {

    // Search Result Page Objects
    get searchResult() {return $('#searchResult0')}
    get destinationSearchResult() {return $('search-suggestion[text="destSearchText"] button#searchResult0')}
    get resultSideMenu() { return $('div#sideMenu_container') }
    get routeButton() {return $('div.jp_btn a')}
    get destinationInput() {return $('input#search-text-dest')}
    get transitDetails() {return $('div.jpoverall')}
    get journeyBusButton() {return $('div.button-icon.journey-bus')}
    get busIconResult() {return $('div#mCSB_7_container span.ion-android-bus')}
    get nearbyMrtStations() { return $('//div[@id=\'sideMenu_container\']//div[contains(text(),\'MRT STATION\')]') }
    get nearbyBusStops() { return $$('div[ng-repeat=\'bus in busstop | orderBy:"+Area"\']') }
    get nearbyCarParks() { return $$('div[ng-style="carpark.style"]') }
    get nearbyCarParks() { return $$('div[ng-style="carpark.style"]') }
    get nearbyDbsAtms() { return $('div#dbs') }
    get nearbyUobAtms() { return $('div#uob') }
    get nearbyOcbcAtms() { return $('div#ocbc') }
    get nearbyHawkerCentres() { return $('div[ng-style="hawker.style"]') }
    get nearbyHealthCareCommunityCentres() { return $('div[ng-style="cc.style"]') }

    // Theme Footer Links Page Objects
    get attractionsLink() { return $('input.attractions') }
    get aminitiesLink() { return $('input.amenities') }
    get healthcareLink() { return $('input.healthcare') }
    get transportLink() { return $('input.transport') }
    get viewMoreLink() { return $('input.more') }

    // Methods
    open() {
        

        browser.url('main/v2')
        if(this.doNotShowAgainPopupClick.isDisplayed())
        {this.doNotShowAgainPopupClick.click()
        //browser.refresh()
        browser.pause(500)
    }
        
    }
    waitForPageToLoad() {
        if (!this.searchBox.isDisplayed()) {
            this.searchBox.waitForDisplayed(10000)
        }
    }
}

export default new HomePage();
