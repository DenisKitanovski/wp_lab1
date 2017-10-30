import {Injectable} from '@angular/core';
import {Student} from './model/student';


@Injectable()
export class StudentManagmentService {
  STUDENTS: Student[] = [

    {ime: 'Denis', prezime: 'Kitanovski', indeks: 153019, nasoka: 'PET'},
    {ime: 'Petre', prezime: 'Petrov', indeks: 151019, nasoka: 'KNI'},
    {ime: 'Mirko', prezime: 'Mirkov', indeks: 152091, nasoka: 'MT'},
    {ime: 'Stole', prezime: 'Stolev', indeks: 122122, nasoka: 'IKI'},
  ];

  vratiStudenti(): Student[] {
    return this.STUDENTS;
  }
}
