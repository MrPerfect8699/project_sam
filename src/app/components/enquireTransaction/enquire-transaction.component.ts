import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import * as moment from 'moment'
import { from } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let now = moment().format('LLLL');
const CoyyPple = [];

@Component({
  selector: 'enquire-transaction',
  templateUrl: './enquire-transaction.component.html',
  styleUrls: ['./enquire-transaction.component.css']
})
export class EnquireTransactionComponent implements OnInit {
  showTransaction = false;
  // people: { name: string; age: number; sex: string; }[];
  peopleFilter: any;
  transType: any = 0;
  status: any = 0;
  distinct = [];
  transTypeArr = [];
  CoyyPple: any[];
  people = [
    { transactionNo: 'CAYEPMT00002', transactionType: 'CAYE Contribution', date: '10/15/2019', status: 'Approved', verifier: 'Jesmiah', desc: '(Bank)'},
    { transactionNo: 'CAYEPMT00003', transactionType: 'Refund', date: '10/17/2019', status: 'Returned', verifier: 'Navami', desc: '' },
    { transactionNo: 'CAYEPMT00001', transactionType: 'Update Entity Information', date: '10/20/2019', status: 'Approved', verifier: 'Rduzaki', desc: '' },
    { transactionNo: 'CAYEPMT00004', transactionType: 'CAYE Contribution', date: '10/21/2019', status: 'Returned', verifier: 'Rduzaki', desc: '' },
    { transactionNo: 'CAYEPMT00005', transactionType: 'Refund', date: '10/22/2019', status: 'Pending Approval', verifier: 'Rduzaki', desc: '(Online DDA)' },
    { transactionNo: 'CAYEPMT00005', transactionType: 'Refund', date: '10/22/2019', status: 'Pending Approval', verifier: 'Rduzaki', desc: '' },
    { transactionNo: 'CAYEPMT00005', transactionType: 'Refund', date: '10/22/2019', status: 'Approved', verifier: 'Rduzaki', desc: '(Bank)' }
  ];
  dateStart: string;
  dateTo: string;
  constructor(public dialog: MatDialog) {
  }
  ngOnInit() {
    this.originalArray();
    // distict value take from array
    this.distinct = [...Array.from(new Set(this.CoyyPple.map(x => x.status)))];
    this.transTypeArr = [...Array.from(new Set(this.people.map(x => x.transactionType)))];
  }

  originalArray() {
    this.CoyyPple = this.people;
  }
  filterDate(startDate, endDate) {
    this.dateStart = moment(startDate).format('DD/MM/YYYY');
    this.dateTo = moment(endDate).format('DD/MM/YYYY');
    this.people = this.CoyyPple
    var items;
    var retArray = [];

    if (!startDate && !endDate) {
      return items;
    }
    this.people.forEach(element => {
      var receivedDate = new Date(element.date);
      if (moment(receivedDate).isSameOrAfter(startDate) && moment(receivedDate).isSameOrBefore(endDate)) {
        retArray.push(element);
      }
    });
    // console.log("Filtered Date", retArray)
    return this.people = retArray;
  }
  openPop(trnsID, type) {
    let dialogRef = this.dialog.open(detailedPop, {
      maxHeight: '500px',
      width: '800px',
      data: { dialogText: trnsID, dialogType: type }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
@Component({
  templateUrl: './detailedPop.html',
  styleUrls: ['./enquire-transaction.component.css']
})
export class detailedPop {
  dialogText: any;
  dialogType: any;
  accorExpand = false;
  accorReject = false;
  transactions = [];
  succPayment = [
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
    { nric: "S1234567A", grossFee: "$ 100", medFee: "$ 5", netFee: "$ 50", invoice: "TX12345SH", reason: "Reason goes here..." },
  ]
  constructor(public dialogRef: MatDialogRef<detailedPop>,
    @Inject(MAT_DIALOG_DATA) public data: detailedPop) { }

  ngOnInit() {
    this.dialogText = this.data.dialogText;
    this.dialogType = this.data.dialogType;
    console.log("passed to array", this.dialogText, this.dialogType)
    console.log(this.transactions)
    this.transactions = [
      { label: "CPF Submission No", value: "1992-12345-MSE-01" },
      { label: "Transaction ID", value: this.dialogText },
      { label: "Payment Mode", value: "Mode" },
      { label: "Entity Name", value: this.dialogType },
      { label: "Transaction Date", value: "10 Aug 2019" },
      { label: "Deduction Date", value: "24 Aug 2019" },
      { label: "Submission NRIC / FIN", value: "S1234123A" },
      { label: "Bank Account", value: "POSB account: XXX-XXX-XX123-4" },
    ]
  }


}