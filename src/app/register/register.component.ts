import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataLoading: boolean;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  formulario: FormGroup;

  constructor(private service : ServiceService) {
    this.dataLoading = false;
    //form validators
    this.formulario = new FormGroup({
      firstName: new FormControl('', [Validators.required]), 
      lastName: new FormControl('', [Validators.required]), 
      username: new FormControl('', [Validators.required]), 
      password: new FormControl('', [Validators.required])
   })
  };

  ngOnInit(): void {
  }

  // calls register method in service and stores usarname&password in localstorge
  callregister() {
    this.service.register(this.username, this.password);
  }

}
