import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './dbz/pages/main-page/main-page.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/main'},
  { path: 'main',pathMatch: 'full',  component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
