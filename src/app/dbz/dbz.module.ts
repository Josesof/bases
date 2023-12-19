import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListLuchadoresComponent } from './components/list-luchadores/list-luchadores.component';
import { AddLuchadorComponent } from './components/add-luchador/add-luchador.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListLuchadoresComponent,
    AddLuchadorComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
