"use strict";

function TodoFunction() {
  const vm = this;
  vm.todos = [
    { task: "Get phone repaired", completed: false },
    { task: "Buy new windshield wipers", completed: false },
    { task: "Haircut", completed: false },
    { task: "Drink a beer", completed: true }
];

  vm.addTask = function(newTodo) {
    newTodo.completed = false;
    vm.todos.push(angular.copy(newTodo));
    vm.newTodo = {};
  
  }
  vm.removeTask = function(index) {
    vm.todos.splice(index, 1);
  }
  vm.completeTask = function(index){
    vm.todos[index].completed = true;
  }
}

angular
  .module("todoApp")
  .controller("TodoController", TodoFunction);