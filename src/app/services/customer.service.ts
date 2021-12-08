import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public url = 'http://localhost:9090/';

  public addTicket(ticket:any)
  {
    return this.http.post(this.url+'tickets/saveTicket',ticket);

  }
}
