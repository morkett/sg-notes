//Difference between state and route:
//
// Route = bit that will be in the url eg '/#home'
// State = 'show-users'
//We dont tell angular to go to the route we tell it to change its state which then adds the route to the url
function mainRouter($stateProvider, $urlRouterProvider){
//state.(nameOfState, url)
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../states/home.html'
  });

//part of url router - that adds '/' if there is no other url added - home state is set to '/'
  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);
