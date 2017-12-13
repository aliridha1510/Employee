import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeployeComponent } from './components/deploye/deploye.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { ServicesService } from './services/services.service';
import { FormPersonComponent } from './form-person/form-person.component';

const appRoutes :Routes=[
  {path : 'deployeComponent',component:DeployeComponent},
  {path : 'login',component:LoginComponent},
  {path : 'photo',component:NewComponentComponent},
  {path : 'post/get',component:FormPersonComponent},
  
  {path :'',redirectTo:'/deployeComponent',pathMatch:'full'}
];
  

@NgModule({
  declarations: [
    AppComponent,
    DeployeComponent,
    LoginComponent,
    NewComponentComponent,
    FormPersonComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
