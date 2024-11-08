import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length )

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomUser])
  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar )

  /* getter style for image path rather than computed style */
  
  // public get imagePath() : string {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }
  
  onSelectedUser () {
    const randomUser = Math.floor(Math.random() * DUMMY_USERS.length )
    this.selectedUser.set(DUMMY_USERS[randomUser])
  }

}
