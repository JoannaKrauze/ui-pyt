import { Category } from "./category.model";
import { Comment } from "./comment.model";

export class Task {
  constructor(public id: number,
    public name: string,
    public priority: number,
    public endDate: number,
    public isImportant: boolean,
    public isDone: boolean,
    public comments: Comment[],
    public category: Category) { }

  public static getDefault(priority: number, endDate: number, isImportant: boolean, isDone: boolean): Task {
    return new Task(null, null, priority, endDate, isImportant, isDone, new Array<Comment>(), null);
  }

}
