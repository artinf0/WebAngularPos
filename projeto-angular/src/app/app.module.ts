import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicosModule } from './medicos/medicos.module';
import { MedicoRoutingModule } from './medicos/medico-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MedicosModule,
    HttpClientModule,
    MedicoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
