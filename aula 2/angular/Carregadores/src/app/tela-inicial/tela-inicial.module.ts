import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { TelaCalculoComponent } from './tela-calculo/tela-calculo.component';
import { FormsModule } from '@angular/forms';
// import { TelaCalculoModule } from './tela-calculo/tela-calculo.module';  
import { CommonModule } from '@angular/common';
// import { TelaCalculoComponent } from './tela-calculo.component';
import { TelaInicialComponent } from '../tela-inicial/tela-inicial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // AppComponent,
    TelaInicialComponent,
    // TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,    
    CommonModule,
    RouterModule
    // TelaCalculoModule
  ],
  exports: [TelaInicialComponent],
//   bootstrap: [AppComponent]
})
export class TelaInicialModule { }
