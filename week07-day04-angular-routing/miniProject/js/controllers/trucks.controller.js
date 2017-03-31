function TrucksController() {
  var controller = this;

  console.log('TrucksController:', controller);
  controller.images = [
    'http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/8/2014/12/04121119/GraveDigger14_01.jpg',
    'https://i.ytimg.com/vi/pslN7pLwvmQ/hqdefault.jpg',
    'https://i.ytimg.com/vi/uLbBx_25y3U/maxresdefault.jpg'
  ];
  function init(){
  }
  init();
}





angular
  .module('miniProject')
  .controller('TrucksController', TrucksController);
