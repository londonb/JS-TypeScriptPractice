module ToDoList {
  export interface ITask {
    description: string;
    done: boolean;
    priority?: IPriority;
    markDone(): void;
    assignedTo?: IPerson;
  }

  export class Task implements ITask {
    done: boolean = false;
    constructor(public description: string, public priority?: IPriority, public assignedTo?: IPerson){}
    markDone(){
      this.done = true;
    }
  }

  export class HomeTask extends Task {
    constructor(public description: string, public priority: IPriority, public assignedTo?: IPerson) {
      super(description, priority);
    }
  }

  export class WorkTask extends Task {
    constructor(public dueDate: Date, public description: string, public priority: IPriority, public assignedTo: IPerson) {
      super(description, priority, assignedTo);
    }
  }

  export class HobbyTask extends Task {
    constructor(public description: string){
      super(description, importance.low);
    }
  }
}
