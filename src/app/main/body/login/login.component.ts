import { Component } from '@angular/core';
import { FormTypes } from 'src/app/models/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../styles/form-styles.css']
})
export class LoginComponent{
  constructor() { }

  formType!: FormTypes;

  onLoginClick() {
    this.formType = FormTypes.Login;
  }

  onRegisterClick() {
    this.formType = FormTypes.Register;
  }
}
