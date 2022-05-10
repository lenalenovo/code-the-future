import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricComponent } from './historic/historic.component';
import { TelaCalculoComponent } from './tela-calculo/tela-calculo.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
// import { TelaCalculoModule } from './tela-calculo/tela-calculo.module';

const routes: Routes = [{path:'tela-calculo', component:TelaCalculoComponent}, {path: '', component: TelaInicialComponent}, {path: 'historic', component: HistoricComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
