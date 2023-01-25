import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model.interface';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../../styles/form-styles.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private usersService: UsersService, private dialog: DialogBoxService) { }

  loginForm!: FormGroup;
  passwordRegex!: string;

  ngOnInit(): void {
    this.passwordRegex = "(?=.*[a-z])(?=.*[A-Z]).{8,20}";
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      'password': new FormControl(
        null,
        [Validators.required, Validators.pattern(this.passwordRegex)]
      )
    });
  }

  onSubmit() {
    this.usersService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(res => {
        if (!res) {
          this.dialog.fire('שגיאת התחברות', 'שם משתמש או סיסמא אינם תקינים', 'error');
        }
        else {
          console.log(res)
          this.usersService.loggedInUser = res;
          this.usersService.loggedInUserChanged.next(res);
          this.dialog.fire('התחברות', 'ההתחברות בוצעה בהצלחה', 'success').then(_ => {
          })
        }
        this.usersService.getKey().subscribe((e:User) => {
          console.log(e)
        });
      })
    }

}
