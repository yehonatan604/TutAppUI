import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  constructor(private usersService: UsersService) { 
  }

  loggedUser!: User;

  userDetailsPropList = {};
  userHobbiesPropList = {};

  ngOnInit(): void {
    this.loggedUser = this.usersService.loggedInUser!;

    this.userDetailsPropList = {
      'שם משתמש' : this.loggedUser.userName,
      'אימייל' : this.loggedUser.email,
      'תאריך לידה' : new Date(this.loggedUser.dob).toLocaleDateString()
    }

    this.userHobbiesPropList = {
      'תמונה' : this.loggedUser.imageId,
      'תחביבים' : this.loggedUser.hobbiesList,
      'קטגוריות מועדפות' : this.loggedUser.favCategoriesList
    }
  }

}
