import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tweet-modal',
  standalone: false,
  templateUrl: './tweet-modal.component.html',
  styleUrls: ['./tweet-modal.component.scss'],
})
export class TweetModalComponent {
  tweetText: string = '';
  charCount = 0;

  constructor(private modalCtrl: ModalController) {}

  updateCharCount() {
    this.charCount = this.tweetText.length;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  postTweet() {
    this.modalCtrl.dismiss({ tweet: this.tweetText });
  }
}
