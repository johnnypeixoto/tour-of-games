import { Component, OnInit } from '@angular/core';
import { IGame } from '../game.module';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit{
  game: IGame = {
    id: 1,
    name: 'Silent Hill'
  }

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
