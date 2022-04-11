

export enum GameState {
  noYet,
  onGoing,
  end
}
export class GameStateManager {
  private _gameState:GameState


  constructor(){
    this._gameState = GameState.noYet
  }

  set gameState(state:GameState){
    this._gameState = state
    switch(this._gameState){
      case GameState.noYet:
        break;
      case GameState.onGoing:
        break;
      case GameState.end:
        break;
    }
  }

}