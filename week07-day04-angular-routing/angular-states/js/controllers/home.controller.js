function HomeController() {
  var controller = this;

  console.log('HomeController:', controller);

  function init(){
    controller.address = {
      Street: '1 Castle Road',
      City: 'London',
      Postcode: 'W1'
    };
  }
  init();
}



angular
  .module('angularstates')
  .controller('HomeController', HomeController);
