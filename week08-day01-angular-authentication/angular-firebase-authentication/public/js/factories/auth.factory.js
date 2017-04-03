/*global firebase */

function AuthRun() {
  var config = {
    apiKey: 'AIzaSyCWB8PEGQg4LvS27v_bCSDNzhIyLaKg8zk',
    authDomain: 'angularauth-9bfa9.firebaseapp.com',
    databaseURL: 'https://angularauth-9bfa9.firebaseio.com',
    projectId: 'angularauth-9bfa9',
    storageBucket: 'angularauth-9bfa9.appspot.com',
    messagingSenderId: '191265946798'
  };

  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth){
  return $firebaseAuth();
}
AuthFactory.$inject = ['$firebaseAuth'];


angular
  .module('myApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
