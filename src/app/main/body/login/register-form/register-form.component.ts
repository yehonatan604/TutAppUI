import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model.interface';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../../../../styles/form-styles.css']
})
export class RegisterFormComponent implements OnInit {
  constructor(private usersService: UsersService, private dialog: DialogBoxService) { }
  @Output() canLoginNow = new EventEmitter();

  registerForm!: FormGroup;
  passwordRepeatValid: boolean = true;
  user!: User;

  minDate!: Date;
  today!: Date;
  userNameRegex!: string;
  passwordRegex!: string;

  ngOnInit(): void {
    this.minDate = new Date("1930-01-01");
    this.today = new Date();
    this.userNameRegex = "(?=.*[א-ת])(?=.*[A-Z])(?=.*[a-z]).{3,20}";
    this.passwordRegex = "(?=.*[a-z])(?=.*[A-Z]).{8,20}";

    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup({
      'userName': new FormControl(
        null,
        [Validators.required, Validators.pattern(this.userNameRegex)]
      ),
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      'dob': new FormControl(
        null,
        [Validators.required]
      ),
      'password': new FormControl(
        null,
        [Validators.required, Validators.pattern(this.passwordRegex)]
      ),
      'passwordRepeat': new FormControl(
        null,
        [Validators.required, Validators.pattern(this.passwordRegex)]
      )
    });
  }

  fillUser() {
    this.user = {
      id: 0,
      userName: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      dob: this.registerForm.value.dob,
      email: this.registerForm.value.email,
      status: 0,
      userType: 1,
      blocked: false
    };
  }

  onLostFocus() {
    this.passwordRepeatValid = this.registerForm.value.password === this.registerForm.value.passwordRepeat;
  }

  onSubmit() {
    this.fillUser();
    this.usersService.checkEmail(this.registerForm.value.email).subscribe(emailExists => {
      
      if (emailExists) {
        this.dialog.fire('שגיאה','מייל זה כבר קיים במערכת!!!', 'error');
        return;
      }

      this.dialog.show("הרשמת משתמש", "האם אתה בטוח?")
        .then(result => {

          if (result.isConfirmed) {
            this.usersService.registerUser(this.user);
            this.dialog.fire('הרשמת משתמש', 'ההרשמה הצליחה, כעת ניתן להתחבר.', 'success')
              .then(_ => this.canLoginNow.emit());
          }

          else {
            this.dialog.fire('הרשמת משתמש', 'ההרשמה בוטלה.', 'warning')
          }

        });
    });
  }

}
