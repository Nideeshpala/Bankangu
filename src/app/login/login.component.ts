import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

constructor(private bld:Router,private ds:DataService ){}
data="hai nideesh"
pdata="Account Number"
ServiceData:any
login(a:any){
  console.log(a.value);
  alert("login clicked")
  this.bld.navigateByUrl("home")


  
}
ngOnInit():void{
  this.ServiceData=this.ds.sData
  console.log(this.ServiceData);
  
  this.ds.Smethod()
}
acnoChange(event:any){
  console.log(event.target.value);
  
}
}
