import * as PIXI from 'pixi.js'
import { Game } from "./Game"
import { GameStateManager } from "./GameStateManager"
import { UI } from "./UI"

export const app = new PIXI.Application();
document.body.appendChild(app.view);
export const game = new Game();
export const gameStateManager = new GameStateManager();
export const ui = new UI();