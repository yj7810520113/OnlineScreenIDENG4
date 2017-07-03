import { OnlineScreenIDENG4Page } from './app.po';

describe('online-screen-ideng4 App', () => {
  let page: OnlineScreenIDENG4Page;

  beforeEach(() => {
    page = new OnlineScreenIDENG4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
