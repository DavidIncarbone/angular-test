import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sub-prova',
  imports: [NgFor],
  templateUrl: './subprova.html',
  styleUrl: './subprova.css',
})
export class SubProva implements OnInit, OnChanges {
  @Input() data: any;

  initialPersons = [];
  ngOnInit(): void {
    console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
