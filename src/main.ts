import { queryUserTask } from "./prompt";
import { Task } from "./task";
import { Project } from "./project";


class TaskManager {
    projects: Project[] = [];

    createProject = function(name : string, description: string) {
        const project = new Project(name, description);
        this.projects.push(project);
    }

    createTask = function() {
        const userInput = queryUserTask();
        const userTask = new Task(userInput.title, userInput.description, userInput.date, userInput.priority);
        const projectSelect : number = 0;
        this.projects[projectSelect];
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