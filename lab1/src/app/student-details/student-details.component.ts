import {Component, OnInit, Input} from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  ime: string;
  prezime: string;
  nasoka: string;
  indeks: number;
  @Input() student: Student;

  constructor() {
  }

  ngOnInit() {
  }

  details(s): void {
    this.ime = s.ime;
    this.prezime = s.prezime;
    this.nasoka = s.nasoka;
    this.indeks = s.indeks;
  }

}
