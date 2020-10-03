import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipsComponent } from './ships/ships.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/ships'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'ships', component:ShipsComponent, canActivate: [GuardGuard]},
  {path: '**', redirectTo: '/ships'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
