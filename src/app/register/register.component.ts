import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  acn:any
  uname:any
  psw:any
  cpsw:any
  signup(){
 console.log(this.acn);
 console.log(this.uname);
 console.log(this.psw);
 console.log(this.cpsw);
 
 
  }

}
