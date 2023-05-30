import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sData="hello hai"

  constructor() { }
  Smethod(){
    alert("service method")
  }
  
}

