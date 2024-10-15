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
    }

    changePriority = function(task : Task, location: number) {
        /*
        take task to be changed
        change current prio
        remove from list
        insert in new position
        shift everything after by one
        
        */
    }

    shiftPriority = function() {
        /**
        after every change in prio, this should re check priorities and fix them
        */
    }
}

export {Project};