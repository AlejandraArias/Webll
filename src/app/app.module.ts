import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AreatrianguloComponent } from './components/areatriangulo/areatriangulo.component';
import { ConversorgradosComponent } from './components/conversorgrados/conversorgrados.component';
import { AreacirculoComponent } from './components/areacirculo/areacirculo.component';

@NgModule({
  declarations: [
    AppComponent,
    AreatrianguloComponent,
    ConversorgradosComponent,
    AreacirculoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
