import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipComponent } from './ships/starships-list/starship/starship.component';
import { StarshipsListComponent } from './ships/starships-list/starships-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'ships', component:ShipsComponent, 
  children: [
    {path: 'starships-list', component:StarshipsListComponent, 
  children: [
    {path: 'starship', component:StarshipComponent}
  ]}]
},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
