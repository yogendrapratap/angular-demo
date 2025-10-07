import {Component, inject, Input, output} from '@angular/core';
import {type TaskInterface} from './task.model';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

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
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
