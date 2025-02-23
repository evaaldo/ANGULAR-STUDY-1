import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: IUser;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  };
}
