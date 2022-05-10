import { Component, OnInit } from '@angular/core';

export interface Medis {
  Forname: string;
  Surename: string;
  BirthDate: Date;
  Gender: string;
  Mobile: string;
  Mail: string;
}

const Medis: Medis[] = [
  {Forname: 'Test', Surename: "Test", BirthDate: new Date(), Gender: "Weiblich", Mobile: "0", Mail:"0@test.de"},
  {Forname: 'Test', Surename: "Test", BirthDate: new Date(), Gender: "Männlich", Mobile: "0", Mail:"0@test.de"},
];
@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  displayedColumns3: string[] = ['Forname', 'Surename', 'BirthDate', 'Gender', 'Mobile', 'Mail'];
  dataSource3 = Medis;

  constructor() { }

  ngOnInit(): void {
  }

}
