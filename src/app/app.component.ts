import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto - Marvel';
  characters: any;
  errorMessage: string;
  nameStartsWith: string;

  constructor(private marvelService: MarvelService) {}

  getCharacters() {
    this.marvelService.getRecords('characters').subscribe(
     characters => {
       this.characters = characters.data.results;
       // console.log(this.characters)
     },
     error =>  {
       this.errorMessage = error as any;
       // console.log(this.errorMessage)
     });
  }
  getCharactersByName() {
    if (this.nameStartsWith) {
        this.marvelService.getRecordsByName('characters', this.nameStartsWith).subscribe(
          characters => {this.characters = characters.data.results;
            // console.log(this.characters)
          },
          error =>  {
            this.errorMessage = error as any;
            // console.log(this.errorMessage)
          });
    } else {
      this.getCharacters();
    }
  }

  ngOnInit() {
    this.getCharacters();
  }
}
