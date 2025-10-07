import {Component, inject, Input, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  @Input({required: true}) userId!: string;
  close = output()

  private taskService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.close.emit();
  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);

    this.close.emit();
  }
}
