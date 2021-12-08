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
  selector: 'app-buglist',
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.css']
})
export class BuglistComponent implements OnInit {

  bugs: Bug[]
  // page:number=1

  constructor(private bugS: BugService) { }

  ngOnInit(): void {
    // this.bugS.getBug().subscribe(data=>this.Bug=data);
    this.getBug1();
  }


  getBug1() {
    this.bugS.retriveBug1().subscribe(response => {

      console.log(response);
      this.bugs = response;

    })
  }
}
