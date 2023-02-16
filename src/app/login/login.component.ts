import { Component } from '@angular/core';
import { ActivatedRoute, Route, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public mail:any;

  constructor(private route:ActivatedRoute){

  }
  ngOnInit():void{
    let email=this.route.snapshot.paramMap.get('email');
    this.mail=email

  }
}
