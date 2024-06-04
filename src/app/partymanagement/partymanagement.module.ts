import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartymanagementRoutingModule } from './partymanagement-routing.module';
import { CreatepartyComponent } from './createparty/createparty.component';


@NgModule({
  declarations: [
    CreatepartyComponent
  ],
  imports: [
    CommonModule,
    PartymanagementRoutingModule
  ]
})
export class PartymanagementModule { }
