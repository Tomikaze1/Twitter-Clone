import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  avatar: string = 'https://i.pravatar.cc/150?u=humpty';

  editing = false;

  profile = {
    name: 'Humpty Dumpdy',
    bio: 'Web Dev. Meme Lord. Scrambled daily 🥚'
  };

  triggerFileInput() {
    this.fileInputRef.nativeElement.click();
  }

  onAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.avatar = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  toggleEdit() {
    this.editing = !this.editing;
  }
}
