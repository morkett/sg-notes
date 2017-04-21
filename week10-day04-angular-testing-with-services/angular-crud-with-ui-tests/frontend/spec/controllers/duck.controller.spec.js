describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$State;
  let mock$StateParams;
  const testDucks = ['charlie','jane'];
  const testDuckId = 'bob';


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
      // to prevent warn when ever the before each is run
      httpBackend
        .when('GET', `${API_URL}/ducks`)
        .respond(testDucks);
    });
  });

  describe('initialisation', () => {
    it('should have controller.selectedDuck undefined', () => {
      expect(controllerToTest.selectedDuck).toEqual(undefined);
    });

    it('should have controller.allDucks as an empty array', () => {
      expect(controllerToTest.allDucks).toEqual([]);
    });

    it('should have controller.newDuck as empty object', () => {
      expect(controllerToTest.newDuck).toEqual({});
    });

    it('should have controller.colors return 3 items', () => {
      expect(controllerToTest.colors.length).toEqual(3);
    });

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




  //deletedDuck
  describe('deleteDuck()', () => {
    it('should make api call to delete specified duck', () => {

      httpBackend
        .expect('DELETE', `${API_URL}/ducks/${testDuckId}`)
        .respond({});
      controllerToTest.deleteDuck(testDuckId);
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  //getDuck
  describe('getDuck()', () => {
    it('should get one duck', () =>{
      controllerToTest.selectedDuck = testDuckId;
      httpBackend
      .expect('GET', `${API_URL}/ducks/${testDuckId}`)
      .respond(controllerToTest.selectedDuck);

      controllerToTest.getDuck(testDuckId);
      httpBackend.flush();

      httpBackend.verifyNoOutstandingExpectation();


    });
  });

  //updateDuck
  describe('updateDuck', () => {
    it('should make api call to update duck with correct data', () => {
      const testUpdatedDuck = {
        _id: testDuckId
      };

      httpBackend
      .expect('PATCH', `${API_URL}/ducks/${testDuckId}`, testUpdatedDuck)
      .respond({});
      controllerToTest.selectedDuck = {
        duck: testUpdatedDuck
      };
      controllerToTest.selectedDuck.duck = testUpdatedDuck;

      controllerToTest.updateDuck();
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  //addDuck
  describe('addDuck()', () => {
    it('should make API call to add duck with correct data', () => {
      const testDuckToAdd = {
        name: 'Daisy'
      };

      controllerToTest.newDuck = testDuckToAdd;

      httpBackend
        .expect('POST', `${API_URL}/ducks`, testDuckToAdd)
        .respond({});

      controllerToTest.addDuck();
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });

    it('should redirect to "home" state on success', () => {

      httpBackend
      //use when because we are not testing the request
        .when('POST', `${API_URL}/ducks`)
        .respond({});

      controllerToTest.addDuck();
      httpBackend.flush();
      expect(mock$State.go).toHaveBeenCalledWith('home');
    });
  });

});
