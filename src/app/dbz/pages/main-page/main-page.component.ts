import { Component, inject } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  private  dbzService = inject(DbzService); 

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(id: string):void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.onNewCharacter(character);
  }

}
