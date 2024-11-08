import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  }
  @Output() idSender = new EventEmitter<string>();

  public get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.idSender.emit(this.user.id);
  }
}
