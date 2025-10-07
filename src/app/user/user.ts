import {Component, computed, EventEmitter, input, Input, Output, output} from '@angular/core';
import {UserInterface} from './user.model';
import {Card} from '../shared/card/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    Card
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
/*  @Input({required: true}) user! : {
    id: string;
    avatar: string;
    name: string;
  };*/
  @Input({required: true}) user! : UserInterface;
  @Input({required: true}) selected!: boolean;
  /*@Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({required: true }) name!: string;*/
  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  /* avatar = input.required<string>()
  name = input<string>()
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });*/

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
