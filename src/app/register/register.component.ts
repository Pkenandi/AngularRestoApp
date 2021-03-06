import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert = false;
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private user: UserService) { }

  ngOnInit(): void {
  }
  register()
  {
    this.user.register(this.registerForm.value).subscribe((result) => {
      this.alert = true;
    });
  }
  close(){
    this.alert = false;
  }

}
