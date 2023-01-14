import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../header/header.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  collapsed: boolean = true;
  logMode: string = 'התחבר';
  userName: string = 'אזור אישי';

  ngOnInit(): void {
    this.usersService.loggedInUserChanged.subscribe(_ => {
      this.logMode = !this.usersService.loggedInUser ?
        'התחבר' :
        'התנתק';
        // this.userName = !this.usersService.loggedInUser ?
        // 'אזור אישי' :
        // this.usersService.loggedInUser.userName;
    });

  }
}