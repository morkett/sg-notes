function ContactController(){
  var controller= this;


  function init() {
    console.log('ContactController:', controller);
    controller.details = {
      name: 'People Peoples',
      email: 'people@example.com',
      number: '0208 555 555 55'
    };
  }

  init();
}

angular
  .module('angularstates')
  .controller('ContactController', ContactController);
