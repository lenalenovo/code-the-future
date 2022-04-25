import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaCalculoComponent } from './tela-calculo/tela-calculo.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
// import { TelaCalculoModule } from './tela-calculo/tela-calculo.module';

const routes: Routes = [{path:'tela-calculo', component:TelaCalculoComponent}, {path: '', component: TelaInicialComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
