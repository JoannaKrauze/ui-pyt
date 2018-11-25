import {Task} from "./task.model";
import {Category} from "./category.model";
import {Project} from "./project.model";
export class User {
    constructor(public id: number,
                public name: string,
                public tasks: Task[],
                public projects: Project[],
                public categories: Category[]) { }
}