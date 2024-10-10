
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

export {Task};