import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialexComponent } from './materialex/materialex.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { CountriesdataComponent } from './countriesdata/countriesdata.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CdkTableModule} from '@angular/cdk/table';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirectiveDirective } from './custom-style-directive.directive';

import { MytestComponent } from './mytest/mytest.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MaterialexComponent,
    CardComponent,
    ChipsComponent,
    CountriesdataComponent,
    FormComponent,
    PageNotFoundComponent,
    CustomStyleDirectiveDirective,
   
    MytestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatInputModule,
    TextFieldModule,
    CdkTableModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
