import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAnnonce} from "./annonce";
import {AnnonceService} from "./annonce.service";


@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {
  pageTitle: string = "Annonce";
  annonce: IAnnonce;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private annonceService: AnnonceService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;

    this.getAnnonce(id);

  }

  getAnnonce(id: number): void {
    this.annonceService.getOne(id).subscribe(value => {
      this.annonce = value;
    },error => {
      this.errorMessage = error.toString();
    });
  }

}
