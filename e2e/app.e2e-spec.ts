import { AngDataPage } from './app.po';

describe('ang-data App', () => {
  let page: AngDataPage;

  beforeEach(() => {
    page = new AngDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
