import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'enquire-transaction',
  templateUrl: './enquire-transaction.component.html',
  styleUrls: ['./enquire-transaction.component.css']
})
export class EnquireTransactionComponent implements OnInit {
  showTransaction = false;
  
  constructor() { }

  ngOnInit() {
  }

  columnDefs = [
    {
    headerName: 'Transaction No', 
    field: 'transactionNo',
    cellRenderer: function(params) {
      return '<a href="https://www.google.com" target="_blank">'+ params.value+'</a>'
    } 
    },
    {headerName: 'Transaction Date', field: 'date'},
    {headerName: 'Transaction Type', field: 'type' },
    {headerName: 'Entity/NRIC ', field: 'transactionType'},
    {headerName: 'Preparer', field: 'verifier'},
    {headerName: 'Status', field: 'status' },

];

rowData = [
    { transactionNo: 'CAYEPMT00001',  date: '03 Oct 2018, 1:55pm',type: 'Update CSB Particular', transactionType: 'Singapore university of social sciences', status: 'Returned', verifier: 'Jesmiah' },
    { transactionNo: 'CAYEPMT00001', date: '15 Oct 2018, 1:55pm', type: 'Update CSB Particular',transactionType: 'Singapore university of social sciences', status: 'Returned', verifier: 'Jesmiah' },
    { transactionNo: 'CAYEPMT00001',  date: '15 Oct 2018, 1:55pm',type: 'Update CSB Particular',transactionType: 'Singapore university of social sciences', status: 'Returned', verifier: 'Jesmiah' }
];

showTransactionDetails(event) {
  this.showTransaction = true;
}

  

}
