import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
  standalone:false,
})
export class MessagesPage {
  messages = [
    { from: '@ionicdev', text: 'Are you going to the meetup?' },
    { from: '@angularfan', text: 'Check this new blog post!' },
  ];
}
