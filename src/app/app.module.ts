import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
// import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';

import { AgGridModule } from 'ag-grid-angular';
import { EnquireTransactionComponent, detailedPop } from './components/enquireTransaction/enquire-transaction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipeCustom } from './components/Pipes/filterData.pipe';
import { UpdateTransStatusComponent, updateTransactionPop } from './components/update-trans-status/update-trans-status';
import { ManageParameterComponent } from './components/manage-parameter/manage-parameter.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    EnquireTransactionComponent,
    DashboardComponent,
    FilterPipeCustom,
    detailedPop,
    UpdateTransStatusComponent,
    updateTransactionPop,
    ManageParameterComponent,
    AuditTrailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRadioModule,

    // FilterPipeModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule ,
    AgGridModule.withComponents([])
  ],
  entryComponents:[
    detailedPop,
    updateTransactionPop
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
