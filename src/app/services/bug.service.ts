import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../pages/admin/bugdetails/bugdetails.component';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  public url = 'http://localhost:9090/';
  
  
  constructor(private _http: HttpClient) { }

  retriveBug(){
    return this._http.get<Bug[]>(this.url+'admin/pendingBugList');
  }

  retriveBug1(){
    return this._http.get<Bug[]>(this.url+'admin/bugList');
  }

  retriveBug2(){
    return this._http.get<Bug[]>(this.url+'admin/newBugList');
  }
}
