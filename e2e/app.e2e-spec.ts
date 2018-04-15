import { VogueAfriqPage } from './app.po';

describe('vogue-afriq App', () => {
  let page: VogueAfriqPage;

  beforeEach(() => {
    page = new VogueAfriqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
