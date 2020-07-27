import Page from './page';

/**
 * This file contain page object selectors and methods for page - Near By Park Page
**/
class NearByParkPage extends Page {

    get label() {return $('//div[contains(text(),\'Nearby Parks\')')}
    get downloadMapLink() {return $('input[type="checkbox"]')}
    get selectALayerPopup() {return $('div[role="dialog"] h2')}
    get popupDownloadButton() {return $('button[type="button"]')}
    get nationalParkLogo() {return $('img[alt="NPark"]')}
    get slaLogo(){return $('img[alt="sla_logo"]')}

}

export default new NearByParkPage();


