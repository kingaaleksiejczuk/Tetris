import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Player } from '../app.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  @Input() name: string; // udekorowanie Input'em informuje angulara, że do tego pola będzie można wiązać w szablonie za pomocą property biding'u
  @Output() addPlayer = new EventEmitter<Player>();
  playerName: string;

  constructor() { }

  ngOnInit(): void {
  }

  add(form: FormGroup) {
    const name = form.value.name;
    if (this._validate(name)) {
      this._addPlayer(name);
      form.reset;
      this.playerName = "Your name: " + name;
    }

  }

  private _validate(name): boolean {
    return name;
  }

  private _addPlayer(name) {
    this.addPlayer.emit({
      name: name,
    });
  }
}