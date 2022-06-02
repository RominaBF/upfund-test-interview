import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAnnonce} from "./annonce";
import {AnnonceService} from "./annonce.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit, OnDestroy {
  pageTitle: string = "My annonces";
  annonces: IAnnonce[] = [];
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';

  set listFilter (value: string){
    this._listFilter = value;
    console.log('This value :' + value);
    this.filtredAnnonce = this.performFilter(value);
  }

  get listFilter () : string {
    return this._listFilter;
  }
  filtredAnnonce: IAnnonce[] = [];

  performFilter(filteBy: string): IAnnonce[] {
    filteBy = filteBy.toLowerCase();
    return this.annonces.filter((annonce: IAnnonce) =>
      annonce.annonceName.toLowerCase().includes(filteBy)) };

  constructor(private annonceService: AnnonceService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.annonceService.getAnnonces().subscribe({
      next: annonces => {
        this.annonces = annonces;
        this.filtredAnnonce = this.annonces; },
      error: err => this.errorMessage =err
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
