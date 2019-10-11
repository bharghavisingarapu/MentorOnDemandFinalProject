import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminlogin.component.html',
  styles: []
})
export class AdminLoginComponent {
  // private router1:Router;
  usr:string=null;
  pwd:string=null;

  constructor(private router: Router) {
    // router.navigate(['/admins'])
  }
  searchAdmin():void{
    if(this.usr=='Bhagi' && this.pwd=='bhagi')
    {
      this.router.navigate(['/adminaccess']);

      // alert("login success");
    }
    else{
      alert("enter correct u and p");
    }
  }
  }


