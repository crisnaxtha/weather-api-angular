import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user : User;
  constructor(private _register: RegisterService) { }

  ngOnInit() {
    this.user = new User;
  }

  registerUser() {
    console.log("user model value", this.user);
    this._register.register(this.user).subscribe(data=>{
      console.log(data);
      alert('data');
    }, error => {
      alert("error");
      console.log(error);
    })
  }

}
