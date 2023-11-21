// import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';

import {MatIconModule} from '@angular/material/icon';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisComponent } from './regis/regis.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckDirective } from './check.directive';
@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    MyProfileComponent,
    SettingComponent,
    AboutComponent,
    StoreComponent,
    CategoriesComponent,
    LoginComponent,
    NavigationComponent,
    RegisComponent,
    CheckDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,MatSliderModule,
    MatInputModule,MatButtonModule,MatFormFieldModule,
     MatSelectModule, NgFor, MatInputModule, FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
