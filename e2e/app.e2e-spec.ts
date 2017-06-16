import { PokemonCheatsheetPage } from './app.po';

describe('pokemon-cheatsheet App', function() {
  let page: PokemonCheatsheetPage;

  beforeEach(() => {
    page = new PokemonCheatsheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
