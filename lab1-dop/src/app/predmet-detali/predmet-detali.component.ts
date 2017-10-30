import {Component, Input, OnInit} from '@angular/core';
import {Predmet} from '../model/predmet';

@Component({
  selector: 'app-predmet-detali',
  templateUrl: './predmet-detali.component.html',
  styleUrls: ['./predmet-detali.component.css']
})
export class PredmetDetaliComponent implements OnInit {
  ime: string;
  semestar: string;
  krediti: number;
  profesor: string;
  @Input() predmet: Predmet;

  constructor() {
  }

  ngOnInit() {
  }

  details(p): void {
    this.ime = p.ime;
    this.semestar = p.semestar;
    this.krediti = p.krediti;
    this.profesor = p.profesor;
  }

}
