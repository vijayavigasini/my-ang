import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class authService {
  inputdata!:datamodel[];

  constructor(private http:HttpClient) { }
 
Proceedregister(inputdata:datamodel) {
    return this.http.post<datamodel[]>("http://localhost:3000/posts",inputdata);
   } 

 GetAll(){
  return this.http.get<datamodel>("http://localhost:3000/posts");
 }
 Getbycode(code: any){
  return this.http.get<datamodel>("http://localhost:3000/posts" + '/' + code);
 }

 Updateuser(code: any,inputdata: any){
  return this.http.put<datamodel>("http://localhost:3000/posts"+ '/' + code,inputdata);
 }
 IsloggedIn(){
  return sessionStorage.getItem('username')!=null;
 }
 GetUserrole(){
  return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
 }
//  isloggedin(){
//   return sessionStorage.getItem('username')!=null;
// }
getrole(){
  return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
}
GetAllCustomer(){
  return this.http.get('http://localhost:3000/customer');
}
Getaccessbyrole(role:any,menu:any){
  return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
}
}

  

