import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-assignbugs',
  templateUrl: './assignbugs.component.html',
  styleUrls: ['./assignbugs.component.css']
})
export class AssignbugsComponent implements OnInit {

  bugid:any
  staffid:any

  constructor(private adminService: AdminService, private snack: MatSnackBar) { }


  public bug2 = {
    bugid:'',
    staffid:''
    
  };

  ngOnInit(): void {this.bugid=this.bugid }


  formSubmit() {
    //validate

    //addUser:userservice
    this.adminService.assignBug(this.bug2,this.bugid,this.staffid).subscribe(
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