import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { PessoasComponent } from './app/pessoas/pessoas.component';
import { IndexComponent } from './app/layout/index/index.component';
import { MenuSuperiorComponent } from './app/menu-superior/menu-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    PessoasComponent,
    IndexComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
