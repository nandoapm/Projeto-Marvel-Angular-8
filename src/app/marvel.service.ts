import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// criação do hash
import { Md5 } from 'ts-md5/dist/md5';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private urlMatriz = 'http://gateway.marvel.com/v1/public/';
  private chavePublica = 'd471b9d853c2fad145cd5dab65761c29';
  private chavePrivada = '696876de1bc1cc70563bfe7f6bdbdf7b50530370';
  private timeStamp = + new Date();
  private hash: string;
  private credencial: string;

  constructor(private http: Http, private md5: Md5) {
    this.getCredencial();
   }

    private extractData(res: Response) {
    const results = res.json();
    return results;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        if (error.status === 0) {
            errMsg = 'Error connecting to API';
        } else {
            const errorJSON = error.json();
            errMsg = `${errorJSON.code} - ${errorJSON.message}`;
        }
    }

    return Observable.throw(errMsg);
}

   getCredencial(): void {
    this.hash = String(Md5.hashStr(`${this.timeStamp}${this.chavePrivada}${this.chavePublica}`));
    this.credencial = `?ts=${this.timeStamp}&apikey=${this.chavePublica}&hash=${this.hash}`;
  }

  getRecords(endpoint: string): Observable<any> {
    const apiUrl = `${this.urlMatriz}${endpoint}${this.credencial}`;
    console.log(apiUrl);
    return this.http.get(apiUrl).map(this.extractData).catch(this.handleError);
  }

  getRecordsByName(endpoint: string, name: string): Observable<any> {
    const apiUrl = `${this.urlMatriz}${endpoint}${this.credencial}&nameStartsWith=${name}`;
    console.log(apiUrl);
    return this.http.get(apiUrl).map(this.extractData).catch(this.handleError);
  }

getStuff() {
return this.credencial;
}
}
