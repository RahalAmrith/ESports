class Game {
  constructor() {}

  getLogoByID(id) {
    console.log("Game Id : " + id);
    
    switch (id) {
      case 1:
        return "https://pandascore.co/assets/icons/lol-dfcf243283cfa3b9f251bb5566d5fc268a616ed78860cfb6ca47685826f62924.png";
      case 3:
        return "https://pandascore.co/assets/icons/csgo-a0a11ac7365922d2e64296eed61fa2c4786fe995d84b06f4bfeef37ab41d37e8.png";
      case 4:
        return "https://pandascore.co/assets/icons/dota2-ced998caab272cce0c809d80cbeecc52eda50821fd1821ce8f3f7c04899a4d8a.png";
      case 14:
        return "https://pandascore.co/assets/icons/ow-715576a0b5fc0e93d143c8cac437803ff3e565df60801c0b8e4070cea21665d5.png";
      case 20:
        return "https://pandascore.co/assets/icons/pubg-56f3a28f0ef9e5dae9c8e47a9c9aad766785fd0684de1eca466132673ec95e62.png";
      case 22:
        return "https://pandascore.co/assets/icons/ow-715576a0b5fc0e93d143c8cac437803ff3e565df60801c0b8e4070cea21665d5.png";
      default:
        return "https://bandat-nhontrach.com/images600_/logo-placeholder-3.png";
    }
  }
}

const _game = new Game();

export default _game;
