import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Patient} from './patient';
import {Doctor} from './doctor';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  patients: string[];

  patientList: Patient[];
  docList: Doctor[];

  docs: string[];
  days: number[];
  dates: string[];
  domain: string[];
  docUser = 'doctor';
  patUser = 'patient';
  pass = '1234';

  filteredDocs: Doctor[];

  constructor() {
    this.patients = [
      '1. John Doe', '2. Harry Poter', '3. Jane Doe', '4. Ionica Tedica', '5. Ioshka Patroshka', '6. Cutie Patootie'
    ];
    this.docs = [
      '1. Joseph Mengele', '2. Temple Grandin', '3. Dr House', '4. Meridith Grey'
    ];
    this.domain = [
      'Cardiology', 'Urology', 'Psychiatry', 'Oncology'
    ];
    this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    this.dates = ['2018-01-30', '2018-02-01', '2018-03-18', '2018-05-09', '2018-12-12'];

    this.patientList = [
      {id: 1, name: 'John Doe', username: 'johndoe', status: 'red'},
      {id: 2, name: 'Harry Potter', username: 'hp', status: 'yellow'},
      {id: 3, name: 'Jane Doe', username: 'janedoe', status: 'green'},
      {id: 4, name: 'Ionica Tedica', username: 'ionica', status: 'red'},
      {id: 5, name: 'Ioshka Patroshka', username: 'ioshka', status: 'green'},
      {id: 6, name: 'Cutie Patootie', username: 'cutie', status: 'red'}
    ];

    this.docList = [
      {id: 1, name: 'Joseph Mengele', speciality: 'Oncology'},
      {id: 2, name: 'Temple Grindin', speciality: 'Cardiology'},
      {id: 1, name: 'Dr. House', speciality: 'Psychiatry'},
      {id: 1, name: 'Meredith Grey', speciality: 'Urology'}
    ];
  }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  performfilter(filterBy: string ){
   this.filteredDocs = this.docList.filter(doctor => doctor.speciality === filterBy);
  }


}
