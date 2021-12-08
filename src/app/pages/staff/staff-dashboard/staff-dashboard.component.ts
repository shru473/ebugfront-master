import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  userid: number;
  // position: number; 
  weight: number;
  symbol: string;
  bugdescription:string;
  priority:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { userid: 1, weight: 10001, symbol: 'API', bugdescription: 'API Issue', priority:'Low' },
  { userid: 2, weight: 10002, symbol: 'SYSTEM', bugdescription: 'SYSTEM Issue', priority:'High'},
  { userid: 3, weight: 10003, symbol: 'URL' , bugdescription: 'URL Issue', priority:'Medium'},
  { userid: 4, weight: 10004, symbol: 'API', bugdescription: 'API Issue', priority:'Low'},
  { userid: 5, weight: 10005, symbol: 'SYSTEM' , bugdescription: 'SYSTEM Issue', priority:'High'},
  { userid: 6, weight: 10006, symbol: 'API' , bugdescription: 'API Issue', priority:'Low'},
  // {position: 7, userid: 7, weight: 10007, symbol: 'SYSTEM' , bugdescription: 'SYSTEM Issue', priority:'Medium'},
  // {position: 8, userid: 8, weight: 10008, symbol: 'URL' , bugdescription: 'URL Issue', priority:'High'},
  // {position: 9, userid: 9, weight: 10009, symbol: 'API' , bugdescription: 'API Issue', priority:'Low'},
  // {position: 10, userid: 10, weight: 10010, symbol: 'SYSTEM' , bugdescription: 'SYSTEM Issue', priority:'Medium'},
];
@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {
  displayedColumns: string[] =  [ 'demo-userid', 'demo-weight', 'demo-symbol', 'demo-bugdescription','demo-priority'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
