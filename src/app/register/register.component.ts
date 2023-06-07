import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private ds:DataService ,private rout:Router){}
  acno:any
  uname:any
  psw:any
  cpsw:any
register(){
 var acno=this.acno
 var uname=this.uname
 var psw=this.psw
 var cpsw=this.cpsw

  if(psw==cpsw){
   this.ds.register(acno,uname,psw).subscribe((result:any)=>{
    alert(result.message)
     this.rout.navigateByUrl("")
   },
   result=>{alert(result.error.message)}
   )
  }
  else{
    alert("password doesn't match")
  }
   
  }
   
  }


