var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, ToDoList.importance.low);
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocites.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection, personPriorityType) {
        var descriptions = [];
        var priorityNumber = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                console.log("before sorted: " + priorityNumber);
                priorityNumber.sort(function (a, b) { return a - b; });
                console.log("sorted: " + priorityNumber);
                if (task.priority.priorityType === personPriorityType.priorityType) {
                    priorityNumber.push(task.priority.priorityId);
                    descriptions.push(task.description + ": " + personPriorityType.priorityType);
                }
            }
            else {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var high = {
        priorityType: "High",
        priorityId: 1
    };
    var medium = {
        priorityType: "Medium",
        priorityId: 2
    };
    var low = {
        priorityType: "Low",
        priorityId: 3
    };
    ToDoList.importance = {
        "high": high,
        "medium": medium,
        "low": low
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-priority.ts" />
var people = ToDoList.people;
var importance = ToDoList.importance;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes", importance.high));
tasks.push(new ToDoList.HomeTask("Buy chocolate", importance.low, people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry", importance.high));
tasks[0].markDone();
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog", importance.high, people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting", importance.medium, people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world", importance.high, people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt", importance.low, people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling", importance.low, people.loki));
console.log(tasks);
var thorTask = ToDoList.describeTasksForPerson(people[name], tasks, importance.high);
console.log("Here are Thor's tasks: ");
for (var _i = 0, thorTask_1 = thorTask; _i < thorTask_1.length; _i++) {
    var task = thorTask_1[_i];
    $("#results").append("<li>" + task + "</li>");
}
