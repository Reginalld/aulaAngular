import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { PessoasComponent } from './app/pessoas/pessoas.component';
import { IndexComponent } from './app/layout/index/index.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { CarrosComponent } from './app/carros/carros.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { LivrosComponent } from './app/livros/livros.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    PessoasComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    PessoasdetailsComponent,
    LoginComponent,
    CarrosComponent,
    CarroslistComponent,
    LivrosComponent,
    LivroslistComponent,
    CarrosdetailsComponent,
    LivrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
