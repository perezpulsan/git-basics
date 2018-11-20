class DicebarAvatars {
  constructor() {
    this.baseURL = "https://avatars.dicebear.com/v2/:sprites/:seed.svg";
    this.init()
  }
  init(){
    this.getElements()
    this.parseHTML()
    this.registerEvent()
  }
  getElements(){
    this.elements={
      btn: document.querySelector('.button'),
      output: document.querySelector('.output')
      }
  }
  registerEvent(){
    this.elements.btn.addEventListener('click', e =>{
    this.parseHTML()
    })
  }
  GenerateURL(){
    const sprites = ['male','female','identicon']
    const spritesIndex = Math.floor(Math.random() * Math.floor(3))
    const randomSprite = sprites[spritesIndex]
    const randomSeed = require("uuid/v4")
    const url = this.baseURL.replace(':sprites',randomSprite).replace(':seed',randomSeed)
    return url
  }
  generateHTML(){
    return `<img src=${this.GenerateURL()}/>`
  }
  parseHTML(){    
    this.elements.output.innerHTML = this.generateHTML() + this.generateHTML() + this.generateHTML()
  }
}
const test = new DicebarAvatars()