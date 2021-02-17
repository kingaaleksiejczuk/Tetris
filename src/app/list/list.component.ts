import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Player } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() player: Array<Player>;
  constructor() { }

  ngOnInit(): void {
  }

}
