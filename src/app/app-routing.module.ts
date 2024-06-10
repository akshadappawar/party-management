import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartymanagementComponent } from './partymanagement/partymanagement.component';

const routes: Routes = [
//   {
//   path: "",
//   redirectTo: '/login',
//   pathMatch: 'full'
// },
{
  path: "login",
  component: LoginComponent,
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},
{
  path: "home",
  component: PartymanagementComponent,
  loadChildren: () => import('./partymanagement/partymanagement.module').then(m => m.PartymanagementModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
