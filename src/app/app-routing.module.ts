import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { StoreComponent } from './store/store.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'setting',component:SettingComponent},
  {path:'myProfile',component:MyProfileComponent},
  {path:'store',component:StoreComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'login',component:LoginComponent},
  {path:'registeration',component:RegisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
