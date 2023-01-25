import { Component, Input } from '@angular/core';
import { MessageStatusTypes } from 'src/app/enterprise/enums/enums';
import { Message } from 'src/app/enterprise/models/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css', '../../../../styles/table-styles.css']
})
export class MessageListComponent {
  @Input() messages!: Message[];
  statusTypes = MessageStatusTypes;
  created!: Date;

  getCreated(created:string) : Date {
    return new Date(created);
  }
}
