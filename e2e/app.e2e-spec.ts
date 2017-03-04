import { NgSpotyFyPage } from './app.po';

describe('ng-spoty-fy App', function() {
  let page: NgSpotyFyPage;

  beforeEach(() => {
    page = new NgSpotyFyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
