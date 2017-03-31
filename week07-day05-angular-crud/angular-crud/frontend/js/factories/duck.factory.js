function DuckFactory(API_URL, $http) {
  return {
    //getAll no reserved word it is jus an object
    getAll: function () {
      return $http({
        method: 'GET',
        //use of back ticks for url
        url: `${API_URL}/ducks`
      });
    },
    getOne: function (id) {
      return $http({
        method: 'GET',
        //use of back ticks for url
        url: `${API_URL}/ducks/${id}`
      });
    }
  };
}

angular
  .module('DuckApp')
  .factory('DuckFactory', DuckFactory);
