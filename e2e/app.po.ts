import { browser, element, by } from 'protractor';

export class NgSpotyFyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSringSearch() {
    return element(by.model('searchStr')).getText();
  }
}
