import { SnapCloudPage } from './app.po';

describe('snapcloud App', () => {
  let page: SnapCloudPage;

  beforeEach(() => {
    page = new SnapCloudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
