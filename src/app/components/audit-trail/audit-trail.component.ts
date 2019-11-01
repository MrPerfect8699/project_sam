import { Component, ViewChild, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as moment from 'moment';
moment().format('DD/MM/YYYY');

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {
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
    { transactionNo: 'CAYEPMT00002', transactionType: '1CAYE Contribution', date: '10/15/2019',  entity: 'Singapore University of Social Science', status: 'Approved', verifier: 'Jesmiah', reason: "", actions: "Logout", user: "Bruce Wyne" },
    { transactionNo: 'CAYEPMT00003', transactionType: '2CAYE Contribution', date: '10/17/2019', entity: 'Singapore University of Social Science', status: 'Rejected', verifier: 'Navami', reason: "", actions: "Logout", user: "Bruce Wyne"},
    { transactionNo: 'CAYEPMT00001', transactionType: '3CAYE Contribution', date: '10/20/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "", actions: "Logout", user: "Bruce Wyne" },
    { transactionNo: 'CAYEPMT00004', transactionType: '3CAYE Contribution', date: '10/21/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "", actions: "Logout", user: "Bruce Wyne" },
    { transactionNo: 'CAYEPMT00005', transactionType: '3CAYE Contribution', date: '10/22/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "", actions: "Logout", user: "Bruce Wyne" },
    { transactionNo: 'CAYEPMT00006', transactionType: '3CAYE Contribution', date: '10/22/2019', entity: 'Singapore University of Social Science', status: 'Pending', verifier: 'Rduzaki', reason: "", actions: "Logout", user: "Bruce Wyne" }
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
      let dateTime = moment(element.date).format('YMMDDHHmmss');
      console.log("date time", element.date)
      var receivedDate = new Date(dateTime);
      if (moment(receivedDate).isSameOrAfter(startDate) && moment(receivedDate).isSameOrBefore(endDate)) {
        retArray.push(element);
        
      }
     
    });
    // console.log("Filtered Date", retArray)
    return this.transactions = retArray;

  }

}
