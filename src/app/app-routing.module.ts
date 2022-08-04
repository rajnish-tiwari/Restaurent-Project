import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { HomeComponent } from './home/home.component';
import { TurkishComponent } from './turkish/turkish.component';


const routes: Routes = [
  { path: '', redirectTo: "turkish", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restaurent', component: RestaurentDashComponent },
  { path: 'home', component:HomeComponent},
  {path: 'turkish', component:TurkishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
