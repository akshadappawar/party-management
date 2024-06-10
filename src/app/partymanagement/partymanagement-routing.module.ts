import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepartyComponent } from './createparty/createparty.component';
import { PartymanagementComponent } from './partymanagement.component';

const routes: Routes = [
  {
    path: 'home',
    component: PartymanagementComponent,
    children: [
      { path: 'createParty', component: CreatepartyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartymanagementRoutingModule { }
