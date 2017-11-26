import { AngularMaterialHelloOddyPage } from './app.po';

describe('angular-material-hello-oddy App', () => {
  let page: AngularMaterialHelloOddyPage;

  beforeEach(() => {
    page = new AngularMaterialHelloOddyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
