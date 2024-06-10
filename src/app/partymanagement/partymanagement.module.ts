import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartymanagementRoutingModule } from './partymanagement-routing.module';
import { CreatepartyComponent } from './createparty/createparty.component';
import { RouterModule } from '@angular/router';
import { PartymanagementComponent } from './partymanagement.component';


@NgModule({
  declarations: [
    CreatepartyComponent,
    PartymanagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PartymanagementRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PartymanagementModule { }
