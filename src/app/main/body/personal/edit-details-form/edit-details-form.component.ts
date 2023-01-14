import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-details-form',
  templateUrl: './edit-details-form.component.html',
  styleUrls: ['./edit-details-form.component.css', '../../../../styles/form-styles.css']
})
export class EditDetailsFormComponent implements OnInit {

  constructor(private usersService: UsersService, private dialog: DialogBoxService) { }

  editDetailsForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.editDetailsForm = new FormGroup({
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      'userName': new FormControl(
        null,
        [Validators.required]
      ),
      'dob': new FormControl(
        null,
        [Validators.required]
      )
    });
  }

  onSubmit() {
    this.usersService.loginUser(this.editDetailsForm.value.email, this.editDetailsForm.value.password)
      .subscribe(res => {
        if (!res) {
          this.dialog.fire('שגיאת התחברות', 'שם משתמש או סיסמא אינם תקינים', 'error');
        }
        else {
          console.log(res)
          this.usersService.loggedInUser = res;
          this.usersService.loggedInUserChanged.next(res);
          this.dialog.fire('התחברות', 'ההתחברות בוצעה בהצלחה', 'success')
        }
      })
  }

}
