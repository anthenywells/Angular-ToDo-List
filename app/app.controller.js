"use strict";

function TodoFunction() {
  const vm = this;
  vm.todos = [
    { task: "Get phone repaired", completed: false },
    { task: "Buy new windshield wipers", completed: false },
    { task: "Haircut", completed: false },
    { task: "Drink a beer", completed: true }
];

  vm.add = function(newTodo) {
    newTodo.completed = false;
    vm.todos.push(angular.copy(newTodo));
    vm.newTodo = {};
  
  }
  vm.delete = function(index) {
    vm.todos.splice(index, 1);
  }
}

angular
  .module("todoApp")
  //Building a controller. 
  .controller("TodoController", TodoFunction);