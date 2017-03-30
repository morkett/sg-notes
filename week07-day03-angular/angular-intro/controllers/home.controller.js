console.log('home.controller.js');
// dont put logic in the HTML, make a function to do it in controllers so it is testable
function HomeController() {
  var controller = this;
  var canShowGonzo = false;

//shows example of sending the click event to this handler -
// see the markup(html) where the variable ''$event' is passed to this method.
  controller.showGonzo = function(event) {
    console.log('ShowGonzo: event', event);
    canShowGonzo = true;
  };
  controller.hideGonzo = function() {
    canShowGonzo = false;
  };

  controller.toggleGonzo = function() {
    // Instead of an if statement for boolean, you can just put not (!)
    canShowGonzo = !canShowGonzo;
  };

  controller.isGonzoVisibile = function() {
    return canShowGonzo;
  };

  controller.getGonzoVisibilityClass = function(){
    var className = 'isVisibile';
    if(!canShowGonzo) {
      className = 'isNotVisible';
    } else {
      className = 'isVisible';
    }
    return className;
  };

  //Edit Trainer
  controller.editTrainerName = function(index) {
    var value = controller.updatedTrainerNames[index];
    //v1 naughty solution - dont access DOM
    // var value = document.getElementById(index).value;

    // controller.trainers.splice(index,1,value);
    // console.log(value);

    //v2 - used splice
    //with ng-model
    // controller.trainers.splice(index,1,value);

    //v3 best solution
    if(value) {
      controller.trainers[index] = value;
    }
  };

//Delete Single Trainer
  controller.deleteOneTrainer = function (index){
    controller.trainers.splice(index, 1);
  };

  //delete all trainers
  controller.deleteAllTrainers = function() {
    controller.trainers = [];
  };

  //Display Clear User Button
  controller.canDisplayClearTrainerList = function(){
    return controller.trainers.length > 0;
  };


//controller to add a trainer to the li from the form
  controller.addTrainer = function() {
    console.log('addTrainer: controller.newTrainerName ', controller.newTrainerName);
    controller.trainers.push(  controller.newTrainerName);
    controller.newTrainerName= '';
  };

  controller.isAddButtonDisabled = function() {
    return !controller.newTrainerName;
  };

  function init() {
    console.log('inside HomeController');
    controller.newTrainerName = '';
    controller.title = 'Home Page';
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.hideGonzo();
  }

  init();
}

// create this controller and use in the app 'myFirstApp'
angular
  //module says I want the below controller to use in 'myFirstApp' - this controller is going to be part of this angular application
 .module('myFirstApp', [])
 //string HomeController is a reference for angular to HomeController in white // when you od create a controller this is called this
 .controller('HomeController', HomeController);
