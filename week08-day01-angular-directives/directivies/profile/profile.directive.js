angular
  .module('angularDirectives')
  // 'profile' = names of directive to be used in index.html
  .directive('profile', function(){
    return {
      // restrict: 'E', means that this directory has to be implimented as an element. (other directives include attributes)
      restrict: 'E',
      replace: true,
      templateUrl: 'directivies/profile/profile.directive.html',
      //scope says we need to find an attribute to the element, = is 2 ways binding, @ equals single binding, & means you are passing in a method/function
      //Names of the attributes you pass in, and the variable that will be available in the index.html +  profile.directive.html
      scope: {
        person: '='
      }
    };
  });
