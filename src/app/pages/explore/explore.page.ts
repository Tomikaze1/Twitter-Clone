import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone:false,
})
export class ExplorePage {
  trends = [
    { title: '#IonicRocks', tweets: '10.2K' },
    { title: '#AngularLove', tweets: '8.1K' },
  ];
}
