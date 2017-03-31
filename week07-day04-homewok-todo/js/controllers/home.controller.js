function HomeController() {
  var controller = this;
 var canShowNewForm = false;
 var canShowEditForm = false;
  controller.title = 'Current TODOs';
  controller.editTitle = 'EDIT LIST';
  var complete = false;
  var className = 'none';

  controller.isNewFormVisible = function () {
      return canShowNewForm;
    };

    controller.isEditFormVisible = function () {
        return canShowEditForm;
      };
      controller.showEditForm = function () {
        if(canShowEditForm === true) {
        return canShowEditForm = false;
      } else {return canShowEditForm = true;}

    };

    controller.showNewForm = function () {
      return canShowNewForm = true;
    }

  controller.addTitle = 'Add new TODOS';
  controller.addNewTodos = function() {
    controller.todos.push(controller.newTodos);
    controller.newTodos = '';
  };

  controller.updateTodos = function(index) {

    if(controller.updatedTodosField[index]) {
      controller.todos.splice(index, 1, controller.updatedTodosField[index]);
      console.log('controller.todos[index]');
    }
  };

  controller.deleteTodos = function($index) {
    controller.todos.splice($index, 1);
  };

  controller.isComplete = function() {
    complete = true;
    return complete;
  };

  controller.complete = function() {
    if (complete === true) {
      className = 'strike';
    }

    return className;
  };


  function init() {
    controller.todos = ['Create TODO Template', 'Create Home Controller', 'Create New Controller','Create States'];
  }
  init();
}
//
// var myApp = angular.module('myApp', []);
//
// myApp.factory('Fact', function() {
//   return {Field: ''};
// });
//
// myApp.controller('FirstCtrl', function (controller, Fact ) {
//   controller.Alpha = Fact;
// });
//
// myApp.controller('SecondCtrl', function (controller, Fact) {
//   controller.Beta = Fact;
// });

angular
  .module('angularstates')
  .controller('HomeController', HomeController);
