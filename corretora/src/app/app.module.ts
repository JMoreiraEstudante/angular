import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { CorretoresComponent } from './components/corretores/corretores.component';
import { CorretorItemComponent } from './components/corretor-item/corretor-item.component';
import { PesquisarDataComponent } from './components/pesquisar-data/pesquisar-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PesquisarComponent,
    CorretoresComponent,
    CorretorItemComponent,
    PesquisarDataComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
