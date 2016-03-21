/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export interface IPriority {
    priorityType: string;
    priorityId: number;
  }

  var high: ToDoList.IPriority = {
    priorityType: "High",
    priorityId: 1
  }

  var medium: ToDoList.IPriority = {
    priorityType: "Medium",
    priorityId: 2

  }
  var low: ToDoList.IPriority = {
      priorityType: "Low",
      priorityId: 3
    }

    export var importance = {
      "high": high,
      "medium": medium,
      "low": low
    };
}
