describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$State;
  let mock$StateParams;
  let testDuckId;
  let API_URL;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller, $httpBackend, _API_URL_) => {
      console.log('API_URL', API_URL);
      // creating an instance using the controllerToTest
      API_URL = _API_URL_;
      httpBackend = $httpBackend;

      mock$State = {
        go: jasmine.createSpy()
      };
      mock$StateParams = {
        duckId: testDuckId
      };
      controllerToTest = $controller('DuckController', {
        $stateParams: mock$StateParams,
        $state: mock$State
      });
    });
  });

  describe('initialisation', () => {
    it('should populate allDucks with corect data', () => {
      const testDucks = ['duck one', 'duck two'];

      httpBackend
        .expect('GET', `${API_URL}/ducks`)
        .respond(testDucks);
      httpBackend.flush();
      expect(controllerToTest.allDucks).toEqual(testDucks);
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  describe('editDuck()', () => {
    it('should go to "edit" state with specified duckId', () => {
      const testDuckId = 'quark';

      controllerToTest.editDuck(testDuckId);
      expect(mock$State.go).toHaveBeenCalledWith('edit', {duckId: testDuckId});
    });
  });



});
