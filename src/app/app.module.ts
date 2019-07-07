import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AddnewComponent } from './addnew/addnew.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'app-home' , component: HomeComponent},
      {path:'app-addnew' , component: AddnewComponent},
      {path:'app-emplist' , component: EmplistComponent},
      {path:'app-contact' , component: ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
