import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-luchador',
  templateUrl: './add-luchador.component.html',
  styleUrls: ['./add-luchador.component.css']
})
export class AddLuchadorComponent {

  //Emisor de eventos
  @Output()
 public  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name: '',
    power: 0
  }

  onDeletId(element: number) {

  }

  emitCharacter():void {

     if (this.character.name.length === 0) return;

     this.onNewCharacter.emit(this.character);
     
  }

}
