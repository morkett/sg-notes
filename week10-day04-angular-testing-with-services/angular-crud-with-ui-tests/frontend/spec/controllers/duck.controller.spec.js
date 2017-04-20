console.log('in ducks specController');
describe('DuckController', () => {

  let controllerToTest;
  let httpBackend;

  beforeEach(() => {
    module('DuckApp');

    inject(($controller, $httpBackend) => {
      controllerToTest = $controller('DuckController');
      httpBackend = $httpBackend;
      console.log('httpBackend', httpBackend);
    });
  });

  describe('initialisation', () => {
    it('should do a basic test', () => {
      expect(1+1).toEqual(2);
    });
  });
});
