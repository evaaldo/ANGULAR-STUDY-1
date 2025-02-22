import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.id);
  };
}
