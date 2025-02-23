import { Injectable } from "@angular/core";
import { INewTask } from "./new-task/new-task.model";

@Injectable({ providedIn: "root" })
export class TasksService {
 private tasks = [
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
 ];

 constructor() {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    this.tasks = JSON.parse(tasks);
  }
 }

 getUserTasks(userId: string) {
  return this.tasks.filter((task) => task.userId === userId);
 };

 addTask(taskData: INewTask, userId: string) {
  this.tasks.unshift({
    id: new Date().getTime().toString(),
    userId: userId,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.date
  });
  this.saveTasks();
 };

 removeTask(id: string) {
  this.tasks = this.tasks.filter((task) => task.id !== id);
  this.saveTasks();
 }

 private saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(this.tasks));
 }
}
