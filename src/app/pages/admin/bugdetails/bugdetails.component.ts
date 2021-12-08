import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/services/bug.service';


export class Bug {
  constructor(
    public bugid: number,
    public discription: string
  ) {
  }
}

@Component({
  selector: 'app-bugdetails',
  templateUrl: './bugdetails.component.html',
  styleUrls: ['./bugdetails.component.css']
})
export class BugdetailsComponent implements OnInit {
  bugs: Bug[]
  // page:number=1

  constructor(private bugS: BugService) { }

  ngOnInit(): void {
    // this.bugS.getBug().subscribe(data=>this.Bug=data);
    this.getBug();
  }


  getBug() {
    this.bugS.retriveBug().subscribe(response => {

      console.log(response);
      this.bugs = response;

    })
  }
}

