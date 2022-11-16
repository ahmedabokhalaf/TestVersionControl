import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(userName:string,email:string){
    console.log('user login');
    
  }
}
