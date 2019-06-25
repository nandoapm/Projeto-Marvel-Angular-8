import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-personagem',
  templateUrl: './lista-personagem.component.html',
  styleUrls: ['./lista-personagem.component.css']
})
export class ListaPersonagemComponent implements OnInit {

  constructor() { }

  @Input() herois;

  ngOnInit() {
  }

}
