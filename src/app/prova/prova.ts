import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggle } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-prova',
  imports: [MatCardModule, MatSlideToggle, MatButton],
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})
// AfterContentChecked,
// AfterContentInit,
// AfterViewInit,
// AfterViewChecked,
// AfterViewInit,
// DoCheck,
// OnDestroy
export class Prova implements OnInit {
  isDisabled = false;

  immagine = '';
  immagine1 =
    'https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  immagine2 = 'https://material.angular.dev/assets/img/examples/shiba2.jpg';
  // cani = [
  //   {
  //     nome: 'roger',
  //     razza: 'golden',
  //     descrizione: ` The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
  //     A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  //     bred for hunting.`,
  //   },
  // ];
  constructor() {
    console.log('costruttore');
  }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
    // let counter = 0;
    // setInterval(() => {
    //   // this.isDisabled = !this.isDisabled;
    //   if (counter % 2 == 0) {
    //     this.immagine = this.immagine1;
    //   } else {
    //     this.immagine = this.immagine2;
    //   }
    //   counter++;
    // }, 1000);
  }
}
