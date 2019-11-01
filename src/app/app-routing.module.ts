import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquireTransactionComponent } from './components/enquireTransaction/enquire-transaction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateTransStatusComponent } from './components/update-trans-status/update-trans-status';
import { ManageParameterComponent } from './components/manage-parameter/manage-parameter.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';

const routes: Routes = [{
  path: '',
  component: EnquireTransactionComponent
},
{
  path: 'enquireTransaction',
  component: EnquireTransactionComponent
},
{
  path: 'updateStatus',
  component: UpdateTransStatusComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'manageParameter',
  component: ManageParameterComponent
},
{
  path: 'auditTrail',
  component: AuditTrailComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
