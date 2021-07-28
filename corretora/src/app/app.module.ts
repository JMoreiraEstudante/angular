import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { PesquisarDataComponent } from './components/pesquisar-data/pesquisar-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PesquisarComponent,
    PesquisarDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
