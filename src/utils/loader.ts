import { app } from "../init"
import * as PIXI from 'pixi.js'

export async function loaderAddAsync(name:string, path:string) {
  return new Promise((resolve, reject) => {
    app.loader.add(name, path).load((loader, resources) => {
      resolve(resources);
    });  
  })

}