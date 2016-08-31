import { SmartOfficePage } from './app.po';

describe('smart-office App', function() {
  let page: SmartOfficePage;

  beforeEach(() => {
    page = new SmartOfficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
