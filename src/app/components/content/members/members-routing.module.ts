import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersListComponent } from './members-overview/members-list/members-list.component';
import { PersonComponent } from './person/person.component';
import { TeamDetailComponent } from './team-view/team-detail/team-detail.component';

const routes: Routes = [
  { path: 'members/person', component: PersonComponent},
  { path: 'members/team', component: TeamDetailComponent},
  { path: 'members/overview', component: MembersListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
