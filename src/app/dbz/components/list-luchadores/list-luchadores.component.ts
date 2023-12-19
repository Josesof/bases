import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-luchadores',
  templateUrl: './list-luchadores.component.html',
  styleUrls: ['./list-luchadores.component.css']
})
export class ListLuchadoresComponent {

  @Input()
  public characterList: Character[] = [];
}
