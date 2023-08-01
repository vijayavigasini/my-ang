import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { authService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  constructor(private builder: FormBuilder, private http: HttpClient,private toastr: ToastrService, private service: authService, private router: Router) {
 sessionStorage.clear();
  }
  userdata: any;
  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })
  
  proceedlogin() {
     if (this.loginform.valid) {
    //   this.service.Getbycode(this.loginform.value.username).subscribe(res => {
    //     this.userdata = res;
    //     console.log(this.userdata);
    //     if(this.userdata.password===this.loginform.value.password){
    //       if(this.userdata.isactive){
    //         sessionStorage.setItem('username',this.userdata.id);
    //         sessionStorage.setItem('userrole',this.userdata.id);
    //         this.router.navigate(['/user']);
this.http.get<any>("http://localhost:3000/posts").subscribe(res=>{
  const userdata = res.find((user:any) =>user.username === this.loginform.value.username);
  if(userdata){
    alert("Succesfully loggedin..")
    this.router.navigate(['/user']);

    }else{
      alert("User not found");
    }
});  
  
}

}
}
