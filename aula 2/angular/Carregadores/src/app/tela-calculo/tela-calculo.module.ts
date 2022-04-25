import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { TelaCalculoComponent } from './tela-calculo/tela-calculo.component';
import { FormsModule } from '@angular/forms';
// import { TelaCalculoModule } from './tela-calculo/tela-calculo.module';  
import { CommonModule } from '@angular/common';
import { TelaCalculoComponent } from './tela-calculo.component';
import { TelaInicialComponent } from '../tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    // AppComponent,
    TelaCalculoComponent,
    // TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,    
    CommonModule,
    // TelaCalculoModule
  ],
  exports: [TelaCalculoComponent],
//   bootstrap: [AppComponent]
})
export class TelaCalculoModule { }
