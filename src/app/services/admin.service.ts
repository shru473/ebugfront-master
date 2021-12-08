import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private http:HttpClient) { }

  public url = 'http://localhost:9090/';

  public addStaff(staff:any)
  {
    return this.http.post(this.url+'admin/addStaff',staff);

  }

  public assignBug(staff,bugid,staffid)
  {
    return this.http.put(`http://localhost:8080/admin/assignbug/${bugid}/${staffid}`,staff);

  }

  
  public sendmsg(bug3:any)
  {
    return this.http.post(this.url+'admin/sendMessage',bug3);

  }
}