import Page from './page';

/**
 * This file contain page object selectors and methods for page - Electoral Devision Page
**/
class ElectoralDevisionPage extends Page {

    get label() {return $('//div[contains(text(),\'Electoral Division\')')}
    get slider() {return $('input#eld_slider_range')}
}

export default new ElectoralDevisionPage();


