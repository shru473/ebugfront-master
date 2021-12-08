import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) { }


  public user = {

    fname: '',
    lname: '',
    emailid: '',
    username:'',
    password:''
  };

  ngOnInit(): void {
  }


  formSubmit() {
    //validate

    //addUser:userservice
    this.userService.addUser(this.user).subscribe(
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
