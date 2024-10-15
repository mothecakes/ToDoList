import {Task} from "./task";

class Project {
    tasks : Task[] = [];
    name : string;
    description : string;

    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    placePriority = function(task : Task) {
        /*
        if prio is less than num of tasks
            splice in at prio
        else if prio is higher than last element
            splice at end and change prio num
        else if prio is equal, 
            just put after and change

        shift everything after by one

        */
        if (task.priority < this.tasks.length) {
            this.tasks.splice(task.priority, 0, task);
        }
        else{
            this.tasks.push(task);
            task.priority = this.tasks.length;
        }
        this.shiftPriority();
    }

    changePriority = function(task : Task, location: number) {
        /*
        take task to be changed
        change current prio
        remove from list
        insert in new position
        shift everything after by one
        */
        this.tasks.splice(task.priority, 1);
        task.priority = location;
        this.tasks.splice(task.priority, 0, task);
        this.shiftPriority();
    }

    shiftPriority = function() {
        /**
        after every change in prio, this should re check priorities and fix them
        */
        let prioCount = 0;
        this.tasks.array.forEach(function(element) {
            element.priority = prioCount;
            prioCount++;
        });
    }
}

export {Project};