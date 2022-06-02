import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, tap, catchError, throwError} from "rxjs";
import {IAnnonce} from "./annonce";
import { of } from 'rxjs';
import {anySymbolName} from "@angular/core/schematics/migrations/typed-forms/util";

@Injectable({
  providedIn: 'root'
})


export class AnnonceService {
  private annonceUrl = 'api/annonces/annonces.json';

  internalAnnounceList : IAnnonce[] = [
    {
      "annonceId": 1,
      "annonceName": "studio",
      "annonceAddress": "Lile",
      "description": "1 pièce, 24 m², Étage 4",
      "price": 850,
      "annonceType": "Location",
      "imageUrl": "assets/images/studio.png"
    },
    {
      "annonceId": 2,
      "annonceName": "Appartement Meublé",
      "annonceAddress": "Lyon",
      "description": "2 pièces, 1 chambre, 45 m², Étage 2",
      "price": 1500,
      "annonceType": "Location",
      "imageUrl": "assets/images/appartement.png"
    },
    {
      "annonceId": 3,
      "annonceName": "Duplex meublé",
      "annonceAddress": "Paris",
      "description": "2 pièces, 1 chambre, 35 m², Étage 5",
      "price": 170000,
      "annonceType": "Vent",
      "imageUrl": "assets/images/duplex.png"
    }
  ]


  constructor(private http: HttpClient) {
  }


  getAnnonces(): Observable<IAnnonce[]> {
      return of(this.internalAnnounceList)
  }

  getOne(id : number): Observable<IAnnonce> {
   // @ts-ignore
    const found : IAnnonce = this.internalAnnounceList.find(value => value.annonceId === id);
    return of(found)
  }

  addAnnounce(newAnnounce : IAnnonce): Observable<IAnnonce[]>{
    this.internalAnnounceList.push(newAnnounce)
    return this.getAnnonces();
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
