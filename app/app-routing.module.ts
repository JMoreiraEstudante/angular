import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component'
import { PagamentoComponent } from './views/pagamento/pagamento.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  { path: 'pagamento', component: PagamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
