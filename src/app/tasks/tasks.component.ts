import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Master Angular",
      summary: "Learn angular basics",
      dueDate: "2025-12-31"
    },
    {
      id: "t2",
      userId: "u1",
      title: "Build first prototype",
      summary: "Build a first prototype angular project",
      dueDate: "2025-12-31"
    },
    {
      id: "t3",
      userId: "u3",
      title: "Prepare issue template",
      summary: "Prepare and describe an issue template",
      dueDate: "2025-12-31"
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}

// ! => Estou garantindo o angular de que o valor será inicializado
// ? => Estou dizendo ao angular que ele pode ser inicializado ou não e não tem problema
