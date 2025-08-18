import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { Prova } from './prova/prova';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Prova,
    MatSlideToggleModule,
    MatLabel,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
    NgIf,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-test';
  isVisible = false;

  // onInput(event: Event) {
  //   this.title = (<HTMLInputElement>event.target).value;
  // }

  onClick() {
    this.title = 'Ho cliccato sul bottone';
  }
}
