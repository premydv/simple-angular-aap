import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { CountriesdataComponent } from './countriesdata/countriesdata.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MytestComponent } from './mytest/mytest.component';


const routes: Routes = [
  { path: 'login' , component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'card' , component:CardComponent},
  { path: 'countries' , component:CountriesdataComponent},
  { path: 'form' , component:FormComponent},
  
  { path: 'mytest' , component:MytestComponent},
  { path: '**' , component:PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
