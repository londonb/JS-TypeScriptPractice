/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[], personPriorityType: IPriority):String[] {
    var descriptions: String[] = [];
    var priorityNumber: number[] = [];

    for (var task of taskCollection) {
      if (task.assignedTo === assignee) {
        console.log("before sorted: " + priorityNumber);
        priorityNumber.sort(function(a,b){return a-b});
        console.log("sorted: " + priorityNumber);
        if (task.priority.priorityType === personPriorityType.priorityType) {
          priorityNumber.push(task.priority.priorityId);
          descriptions.push(task.description +  ": " + personPriorityType.priorityType);
        }

      } else {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
