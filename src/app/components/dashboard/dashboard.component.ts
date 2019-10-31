import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public show:boolean = false;
  public show1:boolean = false;
  public No:any='';
  showTransaction = false;
  showRecentTransaction = true;
  showRetrunTransaction = false;
  showCancelTransaction = false;
  showNormalTransaction = true;
  showRejectTransaction = false;
  showNormalRejectTransaction = true;
  showCloseRejectTransaction = false;
  showPendingTransaction = false;
  markAsHigh = true;
  markAsNormal = false;
  showMyTransaction = true;
  showTeamTransaction = false;
  
  constructor() { }

  ngOnInit() {
  }

  minimize() {

    if(!this.show)
   {
    this.show =!this.show;
    this.No='No';
   }
 else
   {
    this.show =!this.show;
    this.No='No';
   }

  }

  columnDefs = [
    {
    headerName: 'Transaction No', 
    field: 'transactionNo',
    cellRenderer: function(params) {
      return '<a href="https://www.google.com" target="_blank">'+ params.value+'</a>'
    } 
    },
    {headerName: 'Transaction Date', field: 'date' },
    {headerName: 'Transaction Type', field: 'transactionType' },
    {headerName: 'Entity / NRIC', field: 'entity'},
    {headerName: 'Status', field: 'status' },
    {headerName: 'Preparer', field: 'verifier'}
];

rowData = [
    { transactionNo: 'CAYEPMT00001', transactionType: 'CAYE Contribution', date: '15 Oct 2018 10:46AM', status: 'Returned', entity: 'Nanyang Polytechnic', verifier: 'Jesmiah' },
    { transactionNo: 'CAYEPMT00001', transactionType: 'CAYE Contribution', date: '15 Oct 2018 10:46AM', status: 'Pending Approval', entity: 'Nanyang Polytechnic', verifier: 'Jesmiah' },
    { transactionNo: 'CAYEPMT00001', transactionType: 'CAYE Contribution', date: '15 Oct 2018 10:46AM', status: 'Rejected', entity: 'Minister of Manpower', verifier: 'Jesmiah' }
];

showTransactionDetails(event) {
  this.showTransaction = true;
}

minimize1() {

  if(!this.show1)
 {
  this.show1 =!this.show1;
  this.No='No';
 }
else
 {
  this.show1 =!this.show1;
  this.No='No';
 }

}

showReturn() {
  this.showRecentTransaction = false;
  this.showRetrunTransaction = true;
  this.showPendingTransaction = false;
  this.showRejectTransaction = false;
}

showRecent() {
  this.showRecentTransaction = true;
  this.showRetrunTransaction = false;
  this.showRejectTransaction = false;
  this.showPendingTransaction = false;
}

cancelTransaction() {
  this.showNormalTransaction = false;
  this.showCancelTransaction = true;
}

showReject() {
  this.showRecentTransaction = false;
  this.showRetrunTransaction = false;
  this.showRejectTransaction = true;
  this.showPendingTransaction = false;
}

closeTransaction() {
  this.showNormalRejectTransaction = false;
  this.showCloseRejectTransaction = true;
}

showPendingApproval() {
  this.showPendingTransaction = true;
  this.showRecentTransaction = false;
  this.showRetrunTransaction = false;
  this.showRejectTransaction = false;
}

markHigh() {
  this.markAsHigh = false;
  this.markAsNormal = true;

}

markNormal() {
  this.markAsHigh = true;
  this.markAsNormal = false;
  
}

showMyTransactions() {
  this.showMyTransaction = true;
  this.showTeamTransaction = false;
}

showTeamTransactions() {
  this.showMyTransaction = false;
  this.showTeamTransaction = true;
}


}
