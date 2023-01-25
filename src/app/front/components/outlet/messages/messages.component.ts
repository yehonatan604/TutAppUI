import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/enterprise/data-services/messages.service';
import { UsersService } from 'src/app/enterprise/data-services/users.service';
import { Message } from 'src/app/enterprise/models/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messagesService: MessagesService, private usersService: UsersService) { }

  messagesIn!: Message[];
  messagesOut!: Message[];

  ngOnInit(): void {
    this.messagesService.getUserMessagesIn(this.usersService.loggedInUser.email).subscribe(messages => {
      this.messagesIn = messages;
    });
    
    this.messagesService.getUserMessagesOut(this.usersService.loggedInUser.email).subscribe(messages => {
      this.messagesOut = messages;
    });
  }

}
