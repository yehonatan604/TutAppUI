import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    constructor(
        private httpClient: HttpClient
    ) {}

    url: string = 'https://localhost:7012/api/messages';

    getUserMessagesIn(email: string) {
        return this.httpClient.get<Message[]>(`${this.url}/?$filter=contains(ReciverEmail, '${email}')`)
    }

    getUserMessagesOut(email: string) {
        return this.httpClient.get<Message[]>(`${this.url}/?$filter=contains(SenderEmail, '${email}')`)
    }
}