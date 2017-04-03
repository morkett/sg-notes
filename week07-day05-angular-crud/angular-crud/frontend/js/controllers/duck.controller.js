//params are what we are injecting into controller - can pass things into the controller via dependency injection
function DuckController($state, $stateParams, DuckFactory){
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

  controller.deleteDuck = function(duckId) {
    DuckFactory.deleteOne(duckId).then(
      function success(response) {
        console.log('deleted:', response);
      },
      function error (error) {
        console.warn('Error deleting duck', error);
      }
    );
  };

  controller.editDuck = function(duckId) {
    $state.go('edit', { duckId: duckId });
  };

  controller.updateDuck = function () {
    DuckFactory.editOne(controller.selectedDuck.duck).then(
     function success(response) {
       console.log('duck updated:', response);
     },
     function error(error) {
       console.warn('Error updating duck:', error);
     }
   );
  };

  controller.addDuck = function(){
    console.log('addDuck()');
    //need to save it or when we refresh it will dissapear. need to make an API call like below.
    DuckFactory.createOne(controller.newDuck).then(
      function success(response) {

        //redirects to another state
        console.log('Created new duck: ', response);
        $state.go('home');
      },
      function error(error) {
        console.warn('Error creating duck:',error);
      }
    );


  };



  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;

    controller.allDucks = [];
    controller.newDuck = {};
    controller.colors= ['red','yellow','pink','blue'];

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
