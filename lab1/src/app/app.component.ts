import {Component, OnInit} from '@angular/core';
import {StudentManagmentService} from './student-managment.service';
import {Student} from './model/student';
import {StudentDetailsComponent} from './student-details/student-details.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private studentService: StudentManagmentService) {

  }

  selectedStudent: Student[];

  getStudents(): void {
    this.selectedStudent = this.studentService.vratiStudenti();
  }

  ngOnInit(): void {
    this.getStudents();
  }

}
