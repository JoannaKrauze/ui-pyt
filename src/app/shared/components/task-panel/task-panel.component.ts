import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Task, Category, Comment } from '../../../models';
import { TaskService } from "../../services/task.service";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})
export class TaskPanelComponent implements OnInit, OnChanges {

  @Input() task: Task;
  @Input() categories: Category[];
  newTask: Task;
  newComment: Comment;
  newCategory: Category;
  selected: string = null;
  newEndDate: Date;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.resetNewCategory();
    this.resetNewComment();
    this.bsConfig = { containerClass: "theme-default" };
  }

  ngOnChanges(changes) {
    if (changes.task !== null) {
      this.newEndDate = new Date(this.task.endDate);
      this.newTask = { ...this.task };
      this.selected = "name";
    }
  }

  selectOption(selected: string) {
    this.selected = selected;
  }

  changeCategory() {
    this.taskService.setCategory(this.newTask.id, this.newTask.category.id)
      .subscribe(
        res => {
          this.task.category = res;
        }
      );
  }

  saveTask() {
    if (this.newEndDate) {
      this.newTask.endDate = new Date(this.newEndDate.getFullYear(), this.newEndDate.getMonth(), this.newEndDate.getDate()).getTime();
    }
    this.taskService.save(this.newTask)
      .subscribe(
        res => {
          this.task.name = res.name;
          this.task.endDate = res.endDate;
        }
      );
  }

  setNewCategory(newCategory: Category) {
    this.newTask.category = newCategory;
  }

  addComment() {
    console.log("AddCometn")
    let newComment = new Comment(null, this.newComment.content, new Date().getTime());
    this.resetNewComment()
    this.taskService.addComment(this.task.id, newComment)
      .subscribe(
        res => {
          this.task.comments.push(res);
          // this.newTask.comments.push(res);
        }
      );
  }

  addCategory() {
    let newCategory = new Category(null, this.newCategory.name, this.newCategory.color)
    this.userService.addCategory(newCategory)
      .subscribe(
        res => {
          this.categories.push(res);
          this.resetNewCategory();
        }
      );
  }

  resetNewCategory() {
    this.newCategory = new Category(null, "", "#FF0000");
  }

  resetNewComment() {
    this.newComment = new Comment(null, "", null);
  }

  getDate(endDate) {
    return new Date(endDate);
  }

}
