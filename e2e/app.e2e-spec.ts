import { FilenationPage } from './app.po';

describe('Filenation App', () => {
  let page: FilenationPage;

  beforeEach(() => {
    page = new FilenationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
