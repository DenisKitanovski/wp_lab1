import {Component} from '@angular/core';
import {PredmetManagmentService} from './predmet-managment.service';
import {OnInit} from '@angular/core';
import {Predmet} from './model/predmet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedPredmet: Predmet[];

  constructor(private predmetService: PredmetManagmentService) {
  }

  getPredmeti(): void {
    this.selectedPredmet = this.predmetService.vratiStudenti();
  }

  ngOnInit(): void {
    this.getPredmeti();
  }

}
