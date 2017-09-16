import { TheHeraldsOfCodePage } from './app.po';

describe('the-heralds-of-code App', () => {
  let page: TheHeraldsOfCodePage;

  beforeEach(() => {
    page = new TheHeraldsOfCodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
