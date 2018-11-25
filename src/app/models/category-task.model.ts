import {Category} from "./category.model";
import {Task} from "./task.model";
export class CategoryTask {
    constructor(public category: Category, public tasks: Task[], public visible: boolean) { }
}