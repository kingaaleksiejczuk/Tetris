import { Component } from '@angular/core';

export interface Player {

  name?: string;
  score?: number;
  time?: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tetris-project';
  playerName: Array<Player> = [];
  submit: boolean;
  currentPlayer: string;

  gameStatus: string;
  gameEvent: [];

  add(player: Player) {
    this.playerName.push(player);
    this.currentPlayer = "Now " + player.name + " is playing";
  }

  getStatus(gameStatusInfo) {
    this.gameStatus = gameStatusInfo;
  }

  getData(gameDataInfo) {
    this.gameEvent = gameDataInfo;
  }
}