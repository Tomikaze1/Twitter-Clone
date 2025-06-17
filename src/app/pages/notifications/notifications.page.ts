import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone:false,
})
export class NotificationsPage {
  notifications = [
    '@eggman liked your tweet',
    '@devgirl followed you',
  ];
}
