import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TweetModalComponent } from 'src/app/components/tweet-modal/tweet-modal.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  tweets = [
    {
      user: '@humpty',
      content: 'Just vibing with Ionic ✨',
      likes: 5,
      retweets: 2,
      replies: ['Nice!', '🔥 Love this']
    },
    {
      user: '@eggman',
      content: 'Angular makes me crack up 🥚',
      likes: 3,
      retweets: 1,
      replies: ['LOL', 'agreed!']
    },
  ];

  selectedTweet: any = null;
  showReplies = false;

  constructor(private modalCtrl: ModalController) {}

  likeTweet(tweet: any) {
    tweet.likes++;
  }

  retweet(tweet: any) {
    tweet.retweets++;
  }

  viewTweet(tweet: any) {
    this.selectedTweet = tweet;
    this.showReplies = true;
  }

  async openTweetModal() {
    const modal = await this.modalCtrl.create({
      component: TweetModalComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data?.tweet) {
        this.tweets.unshift({
          user: '@humpty',
          content: result.data.tweet,
          likes: 0,
          retweets: 0,
          replies: []
        });
      }
    });

    await modal.present();
  }
}
