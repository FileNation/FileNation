import { DCloudPage } from './app.po';

describe('d-cloud App', () => {
  let page: DCloudPage;

  beforeEach(() => {
    page = new DCloudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
