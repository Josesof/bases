import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin : ',
    power: 1500
  }, {
    name: 'Goku : ',
    power: 10000
  }, {
    name: 'Cell',
    power: 40000000
  }];

  onNewCharacter(character: Character): void {
    console.log("Main page:::::::::: ", character)
  }

}
