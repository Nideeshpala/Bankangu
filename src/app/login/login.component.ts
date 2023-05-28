import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
data="hai nideesh"
pdata="enter acno"
login(a:any){
  console.log(a.value);
  alert("login clicked")

  
}
acnoChange(event:any){
  console.log(event.target.value);
  
}
}
