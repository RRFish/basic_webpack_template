import { app } from "./init"
import * as PIXI from 'pixi.js'

const TextureList = [
  {name:"start", url: "UI/start.png"},
  {name:"bunny", url: "UI/bunny.png"},
]

export class UI{
  private start?:PIXI.Sprite
  constructor(){
    this.loadTexture()
  }

  _addTexture(){
    TextureList.forEach((item) => {
      app.loader.add(item)
    })
  }

  loadTexture(){
    this._addTexture()

    return new Promise((resolve, reject)=>{
      try{
        app.loader.load((loader, resources) => {
         
          // This creates a texture from a 'bunny.png' image.
          console.log("resources", resources)
          const start = new PIXI.Sprite(resources.start.texture);
          console.log("start", start)
        
          // Setup the position of the bunny
          start.x = app.renderer.width/2;
          start.y = app.renderer.height/2;
        
          // Rotate around the center
          start.anchor.x = 0.5;
          start.anchor.y = 0.5;
          this.start = start;
          this._eventListen()
          // app.stage.addChild(this.start);    
          resolve(null)
        });    
      }catch(err){
        reject(err)
      }

    })
  } 

  show(){
    // Add the bunny to the scene we are building.
    const start = <PIXI.Sprite>this.start;
    if(!start){
      setTimeout(()=>{
        this.show()
      }, 1000)
      return 
    }

    app.stage.addChild(start);    
  }

  _eventListen(){
    const start = <PIXI.Sprite>this.start;
    start.interactive = true
    start.buttonMode = true;    

    start.on('click', function(){
      console.log("The start button is been click")
    })    
  }
}