import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';

import { AppComponent } from './app.component';
import { MarvelService } from './marvel.service';
import { ListaPersonagemComponent } from './lista-personagem/lista-personagem.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonagemComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MarvelService,
    Md5
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
