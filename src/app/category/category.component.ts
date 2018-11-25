import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { TaskService } from "../shared/services/task.service";
import { Task, Category, Comment, User, CategoryTask } from '../models';



@Component({
  selector: 'category-content',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  user: User;
  tasks: Task[];
  categoryTasks: CategoryTask[];
  categories: Category[];
  errorMessage: string = null;
  selectedTask: Task = null;

  constructor(private userService: UserService,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(
        res => {
          res.tasks.sort((a, b) => {
            return a.priority - b.priority;
          });
          this.user = res;
          this.setCategoryTasks();
        }
      );
  }

  saveTask(task: Task) {
    this.taskService.save(task)
      .subscribe(
        res => {
          task = res;
        }
      );
  }

  setCategoryTasks() {
    this.categoryTasks = this.user ? this.user.categories.map(category => {
      return new CategoryTask(category, this._getCategoryTasks(category.id), true);
    }) : null;
  }

  _getCategoryTasks(id: Number) {
    return this.user.tasks.filter(task => task.category && task.category.id == id);
  }

  changeVisible(category: CategoryTask) {
    category.visible = !category.visible;
  }

  choseTask(selectedTask: Task) {
    this.selectedTask = selectedTask;
  }
}
