describe('TodosFactory', () => {

  let factoryToTest;

  beforeEach( () => {
    module('todosApp');
  });

  beforeEach(inject((TodosFactory) => {
    factoryToTest = TodosFactory;
  }));

  describe('list-array', () => {
    it('should show list', () => {

      expect(factoryToTest.list).toEqual([]);
    });
  });

  fdescribe('add()', () => {
    it('should add new todo item to todo list', () => {
      const newTodoItem = 'newTodoItem';
      factoryToTest.add(newTodoItem);

      expect(factoryToTest.list).toContain(newTodoItem);

    });
    it('should add new todo item to End of Array', () => {
      const newTodoItem = 'newTodoItem';
      factoryToTest.add(newTodoItem);

      expect(factoryToTest.list[factoryToTest.list.length -1]).toEqual(newTodoItem);

    });
  });

  describe('clear()', () => {
    it('should clear all items from list array', () => {
      factoryToTest.clear();

      expect(factoryToTest.list.length).toEqual(0);
    });
  });



});
