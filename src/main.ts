import { queryUserTask } from "./prompt";

class Task {
    title : string;
    description : string;
    date: string;
    priority: number;
    
    constructor(title: string, description : string, date : string, priority: number) {
        this.title = title;
        this.description = description;
        this.date = date;
    }


}

class TaskManager {
    taskList: Task[] = [];
    createTask = function() {
        const userInput = queryUserTask();
        const userTask = new Task(userInput.title, userInput.description, userInput.date, userInput.priority);
        this.taskList.push(userTask);
        // TODO  implement priority shifting when splicing in object.
    }

    displayTasks = function() {
        console.log(this.taskList);
    }
}

let taskM = new TaskManager();
taskM.createTask();
taskM.displayTasks();


// taskManager needs to display current library of stuff