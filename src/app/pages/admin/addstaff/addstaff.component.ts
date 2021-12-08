import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  constructor(private adminService: AdminService, private snack: MatSnackBar, private router:Router) { }


  public staff = {

    fname: '',
    lname: '',
    emailid: '',
  };

  ngOnInit(): void {
  }


  formSubmit() {
    //validate

    //addUser:userservice
    this.adminService.addStaff(this.staff).subscribe(
      (data: any) => {
        //success
        console.log(data);
        this.router.navigate(['admin'])
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