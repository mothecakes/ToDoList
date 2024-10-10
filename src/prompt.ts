export {};

import {format} from "date-fns";
var prompt = require("prompt-sync")();

const queryUserTask = function() {
    const getTaskDate = function() {
        console.log('test')
        const day = prompt("Day: ");
        const month = prompt("Month: ");
        const year = prompt("Year: ");
        let combinedDate = `${day}/${month}/${year}`; 
        combinedDate = format(combinedDate, 'MM/dd/yyyy');
        return combinedDate;
    }

    let title = prompt("What will you task?");

    let description = prompt("Add a description:");

    console.log("When do you want to do this task?");
    let date = getTaskDate();

    let priority = prompt("Where do you want to place this task?");

    return {title, description, date, priority};
}

export {queryUserTask};