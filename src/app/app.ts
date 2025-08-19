import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { Highlight } from './direttive/highlight';
import { Prova } from './prova/prova';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Prova,
    Highlight,
    MatSlideToggleModule,
    MatLabel,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
    CommonModule,
    NgIf,
    NgForOf,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit {
  colore = 'purple';
  ngOnInit(): void {
    console.log(this.form);
  }
  ngAfterViewInit(): void {
    console.log('after view', this.form);
  }
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  protected title = 'angular-test';
  valore = 'ciao';
  // isVisible = true;
  persone = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true, color: 'blue' },
    { nome: 'Luca', cognome: 'Bianchi', isOnline: true },
    { nome: 'Marco', cognome: 'Verdi', isOnline: false },
  ];

  datiRicevuti: any;
  provaModel!: string;

  // numero = 50;
  // stringa = 'ciaO';
  // color = 'red';

  // onInput(event: Event) {
  //   this.title = (<HTMLInputElement>event.target).value;
  // }

  onClick() {
    // this.persone = [
    //   { nome: 'Luigi', cognome: 'Rossi', isOnline: true, color: 'blue' },
    //   { nome: 'Gianni', cognome: 'Bianchi', isOnline: true },
    //   { nome: 'Alberto', cognome: 'Verdi', isOnline: false },
    // ];
    // console.log(this.form.nativeElement.elements.namedItem('name'));
    // const formEl = this.form.nativeElement;
    // const formData = new FormData(formEl);
    // const data = Object.fromEntries(formData.entries());
    // console.log(data);
    console.log(this.provaModel);
  }

  // getColor() {
  //   return 'red';
  // }

  onRiceviDati(event: object) {
    console.log(event);
    this.datiRicevuti = event;
    console.log(this.datiRicevuti);
  }
}
