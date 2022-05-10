import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

export interface PeriodicElement {
  name: string;
  vorname: string;
  telefon: string;
  mobile: string,
  mail: string;
  abholerlaubnis: boolean;
}

export interface Allergy {
  name: string;
  strength: string;
}
export interface Medis {
  name: string;
  unit: string;
  requirement: boolean;
  requirement_quantity: number;
  morning: number;
  midday: number;
  evening: number;
  night: number;
}
export interface diseases {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', vorname:"test", telefon: 'H', mobile: "dwadwadaw", mail:"awdwadwa@ioesjfes.de", abholerlaubnis: true},
  {name: 'Hydrogen', vorname:"test", telefon: 'H', mobile: "dwadwadaw", mail:"awdwadwa@ioesjfes.de", abholerlaubnis: true},
];
const Allergy: Allergy[] = [
  {name: 'Pollen', strength: "yellow"},
  {name: 'Katzen', strength: "green"},
];
const Medis: Medis[] = [
  {name: 'Ass', unit: "mg", requirement: false, morning:50, midday:0, evening:0, night:0, requirement_quantity:0},
  {name: 'Test', unit: "mg", requirement: true, morning:1, midday:0, evening:0, night:0, requirement_quantity:50},
];
const Diseases: diseases[] = [
  {name: 'Pollen'},
  {name: 'Katzen'},
];
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  displayedColumns: string[] = ['name', 'vorname', 'telefon', 'mobile', 'abholerlaubnis'];
  displayedColumns2: string[] = ['name', 'strength'];
  displayedColumns3: string[] = ['name', 'unit', 'morning', 'midday', 'evening', 'night', 'requirement', 'requirement_quantity'];
  displayedColumns4: string[] = ['name'];
  dataSource = ELEMENT_DATA;
  dataSource2 = Allergy;
  dataSource4 = Diseases;
  dataSource3 = Medis;
  myControl = new FormControl();
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: any;
  panelOpenState = false;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
