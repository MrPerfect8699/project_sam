import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  MatInputModule 
} from '@angular/material';

import { AgGridModule } from 'ag-grid-angular';
import { EnquireTransactionComponent, detailedPop } from './components/enquireTransaction/enquire-transaction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipeCustom } from './components/Pipes/filterData.pipe';
import { UpdateTransStatusComponent, updateTransactionPop } from './components/update-trans-status/update-trans-status';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    EnquireTransactionComponent,
    DashboardComponent,
    FilterPipeCustom,
    detailedPop,
    UpdateTransStatusComponent,
    updateTransactionPop
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
