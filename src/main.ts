import { queryUserTask } from "./prompt";
import { Task } from "./task";


class TaskManager {
    projects: Task[][] = [[]];
    createTask = function() {
        const userInput = queryUserTask();
        const userTask = new Task(userInput.title, userInput.description, userInput.date, userInput.priority);
        const projectSelect : number = userInput.project;
        this.projects[projectSelect].push(userTask);
        // TODO  implement priority shifting when splicing in object.
    }

    displayTasks = function() {
        console.log(this.projects);
    }
}

let taskM = new TaskManager();
taskM.createTask();
taskM.displayTasks();


// taskManager needs to display current library of stuff