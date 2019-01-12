import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  patients: string[];
  days: number[];
  dates: string[];

  constructor() {
    this.patients = [
      '1. John Doe', '2. Harry Poter', '3. Jane Doe', '4. Ionica Tedica', '5. Ioshka Patroshka', '6. Cutie Patootie'
    ];
    this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    this.dates = ['2018-01-30', '2018-02-01', '2018-03-18', '2018-05-09', '2018-12-12'];
  }

}
