import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { TeamDetailComponent } from './team-view/team-detail/team-detail.component';

const routes: Routes = [
  { path: 'members/person', component: PersonComponent},
  { path: 'members/team', component: TeamDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
