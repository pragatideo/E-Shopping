import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router'
// import {CredsService} from './services/creds.service';
import { CredsService } from '../services/creds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  email:string="";
  value=false;
  printvalue:boolean=true;
  credsInvalid = false;
  emailvalue="deovanshipragati@gmail.com";
  passwordvalue="admin@123"
  sign;
  post1!:any
  constructor(private router:Router,private post2:CredsService){
    this.sign=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),
      password1:new FormControl('',[Validators.required])
    })
  }
  onsubmit(){ 
    
    this.formsubmitattemp=true;
    this.value=true;
    // console.log(this.sign.valid)
    // if( !(this.sign.controls.email.value==this.emailvalue && (this.sign.controls.password1.value==this.passwordvalue))){
    //   this.credsInvalid = true;
    // }
    if(this.sign.valid ){
      const data={
        "email": this.sign.controls.email.value,
        "password": this.sign.controls.password1.value
      }
      this.post2.postvalues(data).subscribe(response=>{
        console.log(response)
      })
      let stringifiedData = JSON.stringify(data);  
      localStorage.setItem('usercreds',stringifiedData);
      this.router.navigate(['/login',this.email]);
    }
  }
  login=true;
  signup=true;
  
  onsubmit1(){
    this.login=false;
  }
  onsub(){
    this.signup=false;
  }

  formsubmitattemp=false;
  get f(){
    return this.sign.controls;
  }
  ngOnInit(){ 
  }
}
