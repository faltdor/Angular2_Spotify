import { NgSpotyFyPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('ng-spoty-fy App', function() {
  let page: NgSpotyFyPage;
  let inputsearchStr = element(by.model('searchStr'));

  beforeEach(() => {
    page = new NgSpotyFyPage();
    browser.ignoreSynchronization = true ;
    
  });


  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('');
  });

  it('should display message saying Need Music?', () => {
    page.navigateTo();    
    expect(page.getParagraphText()).toEqual('Need Music?');
  });

  it('Should search artist Bruno Marts'),()=>{
  	 page.navigateTo();
  	 inputsearchStr.sendKeys('Need Music?');
  	// element(by.model('searchStr')).sendKeys('Bruno Marts');
     //element(by.css('[value="add"]')).click();
     console.log(element(by.className('form-control')).getText());
     expect(element(by.className('form-control')).getText()).toEqual('Need Music?');
      
  }

});
