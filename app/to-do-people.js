/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        person: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        person: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        person: "God of mischief",
        email: "loki@geocites.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
