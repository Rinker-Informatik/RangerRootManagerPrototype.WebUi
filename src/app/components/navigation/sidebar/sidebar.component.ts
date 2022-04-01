import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sidenav: any;
  isExpanded: boolean = true;
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });

  }

  ngOnInit(): void {
  }

}
