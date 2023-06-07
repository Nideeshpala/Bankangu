import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private bld: Router, private ds: DataService) { }

  pdata = "Account Number"
  pass = "Password"
  acno: any
  psw: any

  login(): void {
    //  console.log(this.acno);
    //  console.log(this.psw);
    this.ds.login(this.acno, this.psw).subscribe((result: any) => {
      alert(result.message)
      this.bld.navigateByUrl("home")

    }, result => { alert(result.error.message) }
    )




  }

  ngOnInit(): void {


  }
}

