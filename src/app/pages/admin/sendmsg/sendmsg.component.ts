import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sendmsg',
  templateUrl: './sendmsg.component.html',
  styleUrls: ['./sendmsg.component.css']
})
export class SendmsgComponent implements OnInit {

 
  constructor(private adminService: AdminService, private snack: MatSnackBar) { }


  public bug3 = {

    bugid: '',
    staffid: ''
  };

  ngOnInit(): void {
  }


  formSubmit() {
    //validate

    //addUser:userservice
    this.adminService.addStaff(this.bug3).subscribe(
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