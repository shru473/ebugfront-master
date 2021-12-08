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
  selector: 'app-newbuglist',
  templateUrl: './newbuglist.component.html',
  styleUrls: ['./newbuglist.component.css']
})
export class NewbuglistComponent implements OnInit {

  bugs: Bug[]
  constructor(private bugS: BugService) { }
  ngOnInit(): void {
    this.getBug2();
  }


  getBug2() {
    this.bugS.retriveBug2().subscribe(response => {

      console.log(response);
      this.bugs = response;

    })
  }
}
