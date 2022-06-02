import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAnnonce} from "./annonce";
import {AnnonceService} from "./annonce.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {
  pageTitle: string = "Annonce";
  currentAnnounce: IAnnonce;
  errorMessage: string;

  form : FormGroup;


  constructor(private route: ActivatedRoute,
              private annonceService: AnnonceService,
              private fb : FormBuilder
      ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.getAnnonce(id);

    // INIT THE FORM WITH THE ANNOUNCE OBJECT
    this.form = this.fb.group({
      name: [this.currentAnnounce.annonceName],
      address: [this.currentAnnounce.annonceAddress, Validators.required],
    });


  }

  getAnnonce(id: number): void {
    this.annonceService.getOne(id).subscribe(value => {
      this.currentAnnounce = value;
    },error => {
      this.errorMessage = error.toString();
    });
  }


  onSubmitForm() {
    this.currentAnnounce.annonceAddress = this.form.value.address;
    this.currentAnnounce.annonceName = this.form.value.name;

    this.annonceService.edit(this.currentAnnounce).subscribe(value => {
      alert('Successfully saved !!')
    },error => {
      console.log(error)
    })

  }
}
