import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersOverviewComponent } from './components/content/members/members-overview/members-overview.component';

const routes: Routes = [
  { path: 'members', component: MembersOverviewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
