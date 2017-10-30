import {Injectable} from '@angular/core';
import {Predmet} from './model/predmet';

@Injectable()
export class PredmetManagmentService {

  PREDMETI: Predmet[] = [
    {ime: 'Strukturno Programiranje', semestar: 'zimski', krediti: 6, profesor: 'Gjorgji Madzarov'},
    {ime: 'Diskretna Matematika', semestar: 'zimski', krediti: 6, profesor: 'Natasa Ilievska'},
    {ime: 'Veb Dizajn', semestar: 'leten', krediti: 6, profesor: 'Ivan Corbev'},
    {ime: 'Internet Tehnologii', semestar: 'leten', krediti: 6, profesor: 'Magdalena Kostovska'}
  ];

  vratiStudenti(): Predmet[] {
    return this.PREDMETI;
  }
}
