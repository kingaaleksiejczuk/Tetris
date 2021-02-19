import { Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { TetrisCoreComponent } from 'ngx-tetris';
import { Player } from '../app.component';

export interface GameData {

  info?: string;
  time?: number;
}
@Component({
  selector: 'app-tetris-mechanism',
  templateUrl: './tetris-mechanism.component.html',
  styleUrls: ['./tetris-mechanism.component.css']
})

export class TetrisMechanismComponent implements OnInit {

  score: number = 0;
  time: number = 0;
  interval;

  gameData: Array<GameData> = [];
  gameStatus: string;


  @Output() gameStatusInfo = new EventEmitter();
  @Output() gameDataInfo = new EventEmitter();

  @ViewChild('game')
  private _tetris: TetrisCoreComponent;

  public bw = false;
  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;

  addPoints() {
    this.score += 10;
  }

  startGame(game) {
    game.actionStart();
    this.gameStatusInfo.emit('Game start');

    this.gameData.push({
      info: 'Game started',
      time: this.time,
    });

    this.gameDataInfo.emit(this.gameData);
    this.startTimer();
  }

  pauseGame(game) {
    game.actionStop();
    this.gameStatusInfo.emit('Game stop');

    this.gameData.push({
      info: 'Game paused',
      time: this.time,
    });

    this.pauseTimer();

  }

  endGame(game) {
    game.actionStop();

    this.gameData.push({
      info: 'Game stop',
      time: this.time,
    });

    this.pauseTimer();
  };

  restartGame(game) {

    game.actionReset();
    this.gameData.push({
      info: 'Reset',
      time: this.time
    });
    return false;
  };

  onLineCleared() {
    this.addPoints();
    this.gameData.push({
      info: 'Line cleared',
      time: this.time
    });
  };


  private startTimer() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  private pauseTimer() {
    clearInterval(this.interval);
  }


  ngOnInit(): void { }

}
