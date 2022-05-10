import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-overview',
  templateUrl: './members-overview.component.html',
  styleUrls: ['./members-overview.component.scss']
})
export class MembersOverviewComponent implements OnInit {

  rootOverview: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
