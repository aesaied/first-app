import { Component } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { Task } from './task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {



  constructor(private logger: LoggerService) {

    logger.info('Task  list  created!');

  }
  //  
  tasks: Task[] = [new Task('Task 1'), new Task('Task 2')];


  add(newTaskTitle: string): void {

    this.tasks.push(new Task(newTaskTitle));

  }

  delete(taskToDelete: Task): void {
    var isConfirmed = confirm(`Are you sure you want to delete task called
     '${taskToDelete.title}'?`);

    if (isConfirmed) {
      this.tasks = this.tasks.filter(task => task != taskToDelete);
    }

  }


  toggele(task: Task): void {
    task.isDone = !task.isDone;
  }


  selectedChange(task: Task): void {

    //alert('task selected!!');
    task.isSelected = !task.isSelected;
  }


  getSelectedTasks(): Task[] {


    return this.tasks.filter(t => t.isSelected);
  }
}
