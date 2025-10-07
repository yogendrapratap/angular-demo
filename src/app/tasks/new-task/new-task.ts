import {Component, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {type NewTaskModel} from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  cancel = output()
  add = output<NewTaskModel>()

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
