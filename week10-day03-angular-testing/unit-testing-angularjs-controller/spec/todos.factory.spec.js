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

  describe('add', () => {
    it('should add new todo item to list array', () => {
      const newTodoItem = 'newTodoItem';
      factoryToTest.add(newTodoItem);

      expect(factoryToTest.list[factoryToTest.list.length -1]).toEqual(newTodoItem);

      // console.log('after add',factoryToTest.list);
    });
  });

  describe('clear', () => {
    it('should clear all items from list array', () => {
      // console.log('factory ARRAY BEFORE', factoryToTest.list);
      factoryToTest.clear();
      expect(factoryToTest.list.length).toEqual(0);
      // console.log('factory ARRAY',factoryToTest.list);
    });
  });



});
