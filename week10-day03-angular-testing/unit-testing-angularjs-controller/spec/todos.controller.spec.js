describe('TodosController', () => {
  // declare a var that can be used to create an instance of the controller for tests
  let controllerToTest;

//declares a var that will be used to create a mock todo factory
  let MockTodosFactory;

//in all the tests that follow, do eveything thats in here
  beforeEach(() => {
    //name of the app that the controller is going to be connected to
    module('todosApp');
    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };
    inject(($controller) => {
      //pass $controller method the name of what you want to create see bottom oftodos.controller.js
      // it will create a new controller with this name - create an instance of this controller
      // TodosFactory matches the name in todos.controller.js dependencies at the top eg $http.
      controllerToTest = $controller('TodosController', {TodosFactory: MockTodosFactory });
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

  describe('add()', () => {
    it('should call TodosFactory.add() with corret parameter', () => {
      const testInputText = 'new todo';
      //primed the controller with a value for input text
      controllerToTest.inputText = testInputText;
      //to test this we need to execute it
      controllerToTest.add();
      //testing to se if the controllerToTest.add is being called with MockTodosFactory
      //jasmine.createSpy allows us to put in the inputText
      expect(MockTodosFactory.add).toHaveBeenCalledWith(testInputText);
    });
    it('should clear inputText', () => {
      it('should call TodosFactory.add() with corret parameter', () => {
        const testInputText = 'new todo 2';

        controllerToTest.inputText = testInputText;
        controllerToTest.add();
        expect(controllerToTest.inputText).toEqual('');
      });


  // describe('clear()', () =>{
  //   it('call the TodosFactory.clear() with the correct')
    });
  });

  describe('isSubmitButtonDisabled()', () => {
    it('should return false if input text is not empty', () => {
      controllerToTest.inputText = 'hello';
      expect(controllerToTest.isSubmitButtonDisabled()).toEqual(false);
    });
    it('should return true if input text is empty', () => {
      controllerToTest.inputText = '';
      expect(controllerToTest.isSubmitButtonDisabled()).toEqual(true);
    });
  });

  describe('isClearButtonDisabled()', () => {
    it('should have the clear button DISABLED if controller.list is empty', () => {
      // controllerToTest.list = [];
      expect(controllerToTest.list).toEqual([]);
    });

    it('should have the clear button ENABLED if controller.list is NOT empty', () => {
      controllerToTest.list = ['todo1', 'todo1'];
      expect(controllerToTest.list).toEqual(controllerToTest.list);
    });
  });


  describe('clear()', () => {
    it('should call the Todo.Factory.clear()', () => {
      controllerToTest.clear();

      expect(MockTodosFactory.clear).toHaveBeenCalled();
    });
  });
});
