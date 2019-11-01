import { Component, ViewChild, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as moment from 'moment';
moment().format('DD/MM/YYYY');


@Component({
  selector: 'update-transaction',
  templateUrl: './update-trans-status.html',
  styleUrls: ['./update-trans-status.css']
})
export class UpdateTransStatusComponent implements OnInit {
  showTransaction = false;
  peopleFilter: any;
  transType: any = 0;
  status: any = 0;
  distinct = [];
  transTypeArr = [];
  CoyyPple: any[];
  dateStart
  dateTo
  tranid: any;
  transactions = [
    { transactionNo: 'CAYEPMT00002', transactionType: '1CAYE Contribution', date: '10/15/2019', entity: 'Singapore University of Social Science', status: 'Approved', verifier: 'Jesmiah', reason: "" },
    { transactionNo: 'CAYEPMT00003', transactionType: '2CAYE Contribution', date: '10/17/2019', entity: 'Singapore University of Social Science', status: 'Rejected', verifier: 'Navami', reason: "" },
    { transactionNo: 'CAYEPMT00001', transactionType: '3CAYE Contribution', date: '10/20/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "" },
    { transactionNo: 'CAYEPMT00004', transactionType: '3CAYE Contribution', date: '10/21/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "" },
    { transactionNo: 'CAYEPMT00005', transactionType: '3CAYE Contribution', date: '10/22/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "" },
    { transactionNo: 'CAYEPMT00006', transactionType: '3CAYE Contribution', date: '10/22/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "" }
  ];
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.CoyyPple = this.transactions;
    // distict value take from array
    this.distinct = [...Array.from(new Set(this.CoyyPple.map(x => x.status)))];
    this.transTypeArr = [...Array.from(new Set(this.transactions.map(x => x.transactionType)))];
  }

  filterDate(startDate, endDate) {
    this.dateStart = moment(startDate).format('DD/MM/YYYY');
    this.dateTo = moment(endDate).format('DD/MM/YYYY');
    this.transactions = this.CoyyPple
    var items;
    var retArray = [];

    if (!startDate && !endDate) {
      return items;
    }
    this.transactions.forEach(element => {
      var receivedDate = new Date(element.date);
      if (moment(receivedDate).isSameOrAfter(startDate) && moment(receivedDate).isSameOrBefore(endDate)) {
        retArray.push(element);
      }
    });
    // console.log("Filtered Date", retArray)
    return this.transactions = retArray;
  }

  updateStatus(transNo, status) {
    this.tranid = transNo;
    let dialogRef = this.dialog.open(updateTransactionPop, {
      
      width: '400px',
      data: { dialogTransNo: transNo ,dialogStatus: status }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.CoyyPple.forEach(element => {
          if(transNo == this.tranid){
            debugger;
            element.status = result.statusOption;
            element.reason = result.reasonText;
          }
        });
      }
     
    });
    this.transactions = this.CoyyPple;
  }

}


@Component({
  templateUrl: './updatePop.html',
  styleUrls: ['./update-trans-status.css']
})
@Injectable()
export class updateTransactionPop {
  dialogStatus: any;
  trnsNo:any;
  transactions = [];
  newStatusArr = ["Approved", "Remaining", "Pending", "Rejected"]
  dialogTransNo: any;
  newStatus: any = 0;
  
  constructor(public dialogRef: MatDialogRef<updateTransactionPop>,
    @Inject(MAT_DIALOG_DATA) public data: updateTransactionPop) { }

  ngOnInit() {
    this.dialogStatus = this.data.dialogStatus;
    this.dialogTransNo = this.data.dialogTransNo;
    console.log("passed to array", this.dialogStatus)
    // this.newStatus = this.dialogStatus;
  }
  

  submit(stat, reason){
    
    this.dialogRef.close({statusOption:stat,reasonText:reason});
    console.log("Submit  ", stat, reason)
  }
  close()
  {
    this.dialogRef.close();
  }
}
