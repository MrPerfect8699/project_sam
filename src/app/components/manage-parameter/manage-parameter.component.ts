import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-parameter',
  templateUrl: './manage-parameter.component.html',
  styleUrls: ['./manage-parameter.component.css']
})
export class ManageParameterComponent implements OnInit {
  transType:any = 0
  nextSbt = false;
  constructor() { }

  ngOnInit() {
  }

}
