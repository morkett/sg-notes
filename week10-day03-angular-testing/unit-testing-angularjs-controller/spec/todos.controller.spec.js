describe('TodosController', () => {
  // declare a var that can be used to create an instance of the controller for tests
  let controllerToTest;

//in all the tests that follow, do eveything thats in here
  beforeEach(() => {
    //name of the app that the controller is going to be connected to
    module('todosApp');
    inject(($controller) => {
      //pass $controller method the name of what you want to create see bottom oftodos.controller.js
      // it will create a new controller with this name - create an instance of this controller
      controllerToTest = $controller('TodosController');
    });
  });

  describe('initialisation', () => {
    //it is jamsmine - write a log string to describe what you're testing
    it('should initialise list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('should initialise inputText correctly', () => {
      //.inputText matches .inputText in todos.controller.js
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});
