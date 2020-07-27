/**
* Generic page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    // Map Images
    get mapImages(){ return $$('img[]')}
    get destinationIcon() {return $('img[src=\'https://web-static.onemap.sg/images/main/misc/icon_DestinationLoc_512.png\']')}
    get sourceIcon() {return $('img[src="https://web-static.onemap.sg/images/main/misc/icons_Locator.png"]')}
    // Map Search Result Popup Page Objects
    get resultPopupOnMap() {return $('div.leaflet-popup-content')}
    get resultPopupAddress() {return $('div.leaflet-popup-content p.block.wrap')}
    get resultPopupFbShareButton() {return $('div.leaflet-popup-content div.fb-share-button')}
    get resultPopupTwitterShareButton() {return $('div.leaflet-popup-content div.twitter-share-button')}
    get resultPopupCopyToClipboardButton() {return $('div.leaflet-popup-content button.btncopy_basic')}
    
    // Top Navigation Page Objects
    get topNavigationBar() {return $('div.topView_container')}
    get searchBox() { return $('input#search-text') }
    get searchIcon() { return $('div.glass') }
    get electrolDivisionButton() { return $('div#EDisplay.topView_btn') }
    get nearByParksButton() { return $('div#ParksDisplay') }
    get essentialAmmenitiesButton() { return $('div#EssDisplay') }
    get schoolQueryButton() { return $('div#SQDisplay') }
    get phpcNearYouButton() { return $('div.topView_btn#PHPCDisplay') }
    get landQueryButton() {return $('div#LQDisplay')}
    get droneQueryButton() {return $('div#DQDisplay')}
    get trafficQueryButton() {return $('div#TQDisplay')}
    get moreMenuButton() { return $('a.wb') }
    get propertyQuery() { return $('div#PQDisplay_M') }
    get populationQuery() { return $('div#POPQDisplay_M') }
    get nearBy() { return $('div#NBDisplay_M') }
    get bizQuery() { return $('div#BQDisplay_M') }
    get busExplorer() { return $('div#BRDisplay_M') }
    get baseMaps() { return $('div#MCDisplay_M') }
    get gallery() { return $('div#WLDisplay_M') }
    get aboutOneMap() { return $('div#ADisplay_M') }
    get feedback() { return $('div#FDDisplay_M') }
    get help() { return $('div#HDisplay_M') }

    // Right Bottom Controls
    get notificationBellIcon() { return $('div.ShowNotification') }
    get notificationPopup() {return $('div.notification_popup_msg')}
    get mapToolsIcon() { return $('div.ShowOtherMarkers') }
    get mapToolsPopup() { return $('//div[contains(text(),\'Measure\')]') }
    get mapToolsHideIcon() { return $('div.hideIcon') }
    get mapToolsPathIcon() { return $('div.pathIcon') }
    get mapToolsDrawIcon() { return $('div.drawIcon') }
    get mapToolsDustbinIcon() { return $('div.dustbinIcon') }
    get mapToolsLocateMyCurrentPositionIcon() { return $('div#toggleLocateMe') }
    get locateResult() {return $('img.leaflet-marker-draggable')}
    get zoomInButton() { return $('a.leaflet-control-zoom-in') }
    get zoomOutButton() { return $('a.leaflet-control-zoom-out') }

    // Footer Links Page Objects
    get facebookLink() { return $('a[href="https://www.facebook.com/OneMap/"]') }
    get oneMapLink() { return $('a[href="https://www.onemap.sg/home/"]') }
    get footerLinkContactUs() { return $('a#contact') }
    get footerLinkPrivacyStatement() { return $('a[href="legal/privacystatement.html"]') }
    get footerLinkTerms() { return $('a[href="legal/termsofuse.html"]') }
    get footerLinkReportVulnarability() { return $('a[href="https://tech.gov.sg/report_vulnerability"]') }

    // Map Scale Page Objects
    get mapScale() { return $('div.leaflet-control-scale-line') }

    // Right Click Context Menus
    get optionMenuViewLatLong() {return $('li.viewLatLong')}
    get optionMenuNavigate() {return $('li.navigate')}
    get optionMenuNearByThemese() {return $('li.nearby')}
    get optionMenuPrint() {return $('li.print')}

    // Loader Animations
    get loaderAnimation() {return $('div.loader')}
    get doNotShowAgainPopupClick() {return $('img[alt="Got it, do not show again"]')}

    //Methods
    hitEnter() { 
        browser.keys("\uE007")
    }

    open(path) {
        browser.url('main/v2/')
    }
}
