import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
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

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', vorname:"test", telefon: 'H', mobile: "dwadwadaw", mail:"awdwadwa@ioesjfes.de", abholerlaubnis: true},
  {name: 'Hydrogen', vorname:"test", telefon: 'H', mobile: "dwadwadaw", mail:"awdwadwa@ioesjfes.de", abholerlaubnis: true},
];
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  displayedColumns: string[] = ['name', 'vorname', 'telefon', 'mobile', 'abholerlaubnis'];
  dataSource = ELEMENT_DATA;
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
