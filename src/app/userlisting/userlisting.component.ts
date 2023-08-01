// import { HttpClient } from '@angular/common/http';
import { Component,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { authService } from '../service/auth.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {


  constructor(private service: authService) {
    this.Loaduser();
  }
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;

  Loaduser() {
    this.service.GetAll().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator=this.paginator;
    });

  }

  displayedColumns: string[] = ['firstname', 'lastname', 'dob', 'email', 'phonenumber', 'username', 'password', 'role', 'action'];
  UpdateUser(code:any) {

  }

}
