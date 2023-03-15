export class Task {

    title!: string;
    isDone: boolean = false;

    isSelected: boolean = false;

    constructor(taskTitle: string) {
        this.title = taskTitle;
    }
}