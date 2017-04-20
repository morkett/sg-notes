console.log('in ducks specController');
describe('DuckController', () => {

  let controllerToTest;

  beforeEach(() => {
    module('DuckApp');

    inject(($controller) => {
      controllerToTest = $controller('DuckController');
    });
  });

  describe('initialisation', () => {
    it('should do a basic test', () => {
      expect(1+1).toEqual(2);
    });
  });
});
