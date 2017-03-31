//params are what we are injecting into controller - can pass things into the controller via dependency injection
function DuckController($stateParams, DuckFactory){
  var controller = this;

  controller.getDuck = function(){
    // $stateParams is like req.params - it finds the thing after the colon eg duck factory line 15
    var duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      function success(response) {
        console.log('duck:',response);
        controller.selectedDuck = response.data;
      },
      function error(error) {
        console.warn('Error getting duck:',error);
      }
    );
  };


  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;

    controller.allDucks = [];
    DuckFactory.getAll().then(
      //success and error are no reserved words. they can be anything or not there
      function success(response) {
        controller.allDucks = response.data;
        console.log(controller.allDucks);
      },
      function error (error) {
        console.warn('Error getting ducks:', error);
      }
    );
  }

  init();
}

// DuckController.$inject = ['DuckFactory'];

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);
