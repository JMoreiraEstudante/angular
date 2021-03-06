import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { ImoveisComponent } from './views/home/imoveis/imoveis.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogoImovelComponent } from './views/home/dialogo-imovel/dialogo-imovel.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavComponent } from './views/nav/nav.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { PesquisarDataComponent } from './views/pagamento/pesquisar-data/pesquisar-data.component';
import { ImagemRealComponent } from './views/home/imagem-real/imagem-real.component';
import { DialogoAlterarImovelComponent } from './views/home/dialogo-alterar-imovel/dialogo-alterar-imovel.component';
import { CorretorComponent } from './views/home/corretor/corretor.component';
import { DialogoCorretorComponent } from './views/home/dialogo-corretor/dialogo-corretor.component';
import { SalarioCorretorComponent } from './views/home/salario-corretor/salario-corretor.component';
import { DialogoVendaComponent } from './views/home/dialogo-venda/dialogo-venda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImoveisComponent,
    DialogoImovelComponent,
    NavComponent,
    PagamentoComponent,
    PesquisarDataComponent,
    ImagemRealComponent,
    DialogoAlterarImovelComponent,
    CorretorComponent,
    DialogoCorretorComponent,
    SalarioCorretorComponent,
    DialogoVendaComponent,
    

 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
