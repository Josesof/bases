import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-luchadores',
  templateUrl: './list-luchadores.component.html',
  styleUrls: ['./list-luchadores.component.css']
})
export class ListLuchadoresComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?: string){   
    if(!id) return;      
    this.onDelete.emit(id);
  }
}
