import { MessageStatusTypes } from '../enums/enums';

export interface Message {
  SenderEmail: string;
  senderName: string;
  ReciverEmail: string;
  reciverName: string;
  title: string;
  content: string;
  created: string;
  status: MessageStatusTypes;
}
