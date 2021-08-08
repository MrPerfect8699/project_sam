import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medSoft';
  constructor(private http: HttpClient) {
    this.http.get('https://github.com/MrPerfect8699/project_sam/blob/master/src/assets/data/medsDB.json')
      .subscribe(x => {
       console.log(x)
      })
  }
  ngOnInit() {

    console.log("Somethjbkf")
  }
}
