import {Component, Input, output} from '@angular/core';
import {type TaskInterface} from './task.model';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: TaskInterface;
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
