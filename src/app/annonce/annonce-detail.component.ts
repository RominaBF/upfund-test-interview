import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAnnonce} from "./annonce";
import {AnnonceService} from "./annonce.service";


@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {
  pageTitle: string = "Annonce";
  annonce: IAnnonce[] | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private annonceService: AnnonceService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    // if (id) {
    // this.getAnnonce(id);
    // }
  }

  // getAnnonce(id: number): void {
  //   this.annonceService.getAnnonces(id).subscribe({
  //     next: annonce => this.annonce = annonce,
  //     error: err => this.errorMessage = err
  //   });
  // }

}
