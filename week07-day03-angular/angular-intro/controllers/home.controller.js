console.log('home.controller.js');
// dont put logic in the HTML, make a function to do it in controllersso it is testable
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
      className = 'isVisible'
    }
    return className;
  };

//controller to add a trainer to the li from the form
  controller.addTrainer = function() {
    console.log('addTrainer: controller.newTrainerName ', controller.newTrainerName);
    controller.trainers.push(  controller.newTrainerName);
    controller.newTrainerName= '';
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

// create this controller and use in thr app 'myFirstApp'
angular
  //module says I want the below controller to use in 'myFirstApp' - this controller is going to be part of this angular application
 .module('myFirstApp', [])
 //string HomeController is a reference for angular to HomeController in white // when you od create a controller this is called this
 .controller('HomeController', HomeController);
