import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/services/customer.service';

interface Bug {
  value: string;
  viewValue: string;
}

interface Priority {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  Bugs: Bug[] = [
    {value: 'API_ISSUE', viewValue: 'API ISSUE'},
    {value: 'URL_ISSUE', viewValue: 'URL ISSUE'},
    {value: 'SYSTEM_ISSUE', viewValue: 'SYSTEM LEVEL'},
  ];

  Priorities: Priority[] = [
    {value: 'LOW', viewValue: 'LOW'},
    {value: 'MEDIUM', viewValue: 'MEDIUM'},
    {value: 'HIGH', viewValue: 'HIGH'},
  ];

  constructor(private customerService: CustomerService, private snack: MatSnackBar) { }


  public ticket = {

    title: '',
    type: '',
    priority: '',
    discription: '',
  };

  ngOnInit(): void {
  }


  formSubmit() {
    //validate

    //addUser:userservice
    this.customerService.addTicket(this.ticket).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert("success");
        // Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success');
      }
      
      // , (error) => {
      //   error
      //   console.log(error);
        //alert("something went wrong");
        // this.snack.open("Something went wrong !!",'',{
        // duration:3000,

        // }

        // );
    // }

    );

  }







}
