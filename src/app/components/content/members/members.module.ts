import { MembersOverviewComponent } from "./members-overview/members-overview.component";
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TeamViewComponent } from "./team-view/team-view.component";
import { MembersRoutingModule } from "./members-routing.module";
import { TeamDetailComponent } from "./team-view/team-detail/team-detail.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
      MembersOverviewComponent,
      TeamViewComponent,
      TeamDetailComponent
  ],
  imports: [
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MembersRoutingModule,
    MatAutocompleteModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class MembersModule { }
