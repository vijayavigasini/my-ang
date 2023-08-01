import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ToastrService}from 'ngx-toastr';
import { Router } from '@angular/router';
import { datamodel } from '../model';
import {authService} from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerform!:FormGroup;
  
constructor(private builder: FormBuilder,private toastr: ToastrService,private service:authService,private router:Router) {
  this.registerform = this.builder.group({
    firstname:this.builder.control('',Validators.required),
    lastname: this.builder.control('',Validators.required),
    dob: this.builder.control('',Validators.required),
    email: this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    phonenumber: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(10)])),
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required),
    role: this.builder.control('',Validators.required),
  //  istactive: this.builder.control(false)
   
  });
}



proceedregisteration(inputdata:datamodel) {
  if (this.registerform.valid) {
this.service.Proceedregister(inputdata).subscribe( (res:any) => {
  this.toastr.success('please contact admin for enable access','Registered Successfully');
  this.router.navigate(['/log']);
  console.log(this.registerform.value);
});
  } else {
    this.toastr.warning('Please enter valid data');
  }
}

}
 