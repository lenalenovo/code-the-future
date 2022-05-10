import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaCalculoComponent } from './tela-calculo/tela-calculo.component';
import { FormsModule } from '@angular/forms';
// import { TelaCalculoModule } from './tela-calculo/tela-calculo.module';  
import { CommonModule } from '@angular/common';
import { TelaCalculoModule } from './tela-calculo/tela-calculo.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaInicialModule } from './tela-inicial/tela-inicial.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
    // TelaInicialComponent,
    // TelaCalculoComponent
  ],
  imports: [
    TelaCalculoModule,
    TelaInicialModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,    
    CommonModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
