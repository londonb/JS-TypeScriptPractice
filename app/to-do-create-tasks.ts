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

tasks.push(new ToDoList.WorkTask(today, "Update blog", importance.high , people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting", importance.medium, people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world",importance.high , people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt", importance.low, people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling", importance.low, people.loki));

console.log(tasks);

var thorTask = ToDoList.describeTasksForPerson(people[name], tasks, importance.high);

console.log("Here are Thor's tasks: ");

for (var task of thorTask) {
$("#results").append("<li>" + task + "</li>");
}
