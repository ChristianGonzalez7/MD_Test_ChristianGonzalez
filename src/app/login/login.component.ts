import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataLoading: boolean;
  username: string;
  password: string;
  formulario: FormGroup;

  constructor(private service : ServiceService, private route: Router) {
    this.dataLoading = false;
    this.formulario = new FormGroup({
      username: new FormControl('', [Validators.required]), 
      password: new FormControl('', [Validators.required])
   })
  };

  ngOnInit(): void {
  }

  async callLogin() {
    this.dataLoading = true;
    let loginResponse = await this.service.login(this.username, this.password);
    this.dataLoading = false;
    if (loginResponse) {
      localStorage.setItem('logged', 'true');
      this.route.navigate(['/ships']);
    } else return false;
    };

};


