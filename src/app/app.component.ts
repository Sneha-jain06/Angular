import { Component } from '@angular/core';
import { FormControl,FormGroup,FormControlName,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page1';
  user_data:any ={};
  email_id="abc@gmail.com";
  pass="Abc@12345";

  loginuser(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.user_name==this.email_id  && this.loginForm.value.password==this.pass)
    {
    alert("Login Successfully");
    }
    else{
    alert("Invalid Email and Password");
    }
  }
 

  loginForm = new FormGroup({
    user_name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    email:  new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$')]) ,
    age: new FormControl('',[Validators.minLength(3)]),
    number : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  })

  

  get user_name()
  {
    return(this.loginForm.get('user_name'));
  }


  get email()
  {
    return(this.loginForm.get('email'));
  }
  
  get password()
  {
    return(this.loginForm.get('password'));
  }

  get age()
  {
    return(this.loginForm.get('age'));

  }

  get number()
  {
    return(this.loginForm.get('number'));
  }
  
}
