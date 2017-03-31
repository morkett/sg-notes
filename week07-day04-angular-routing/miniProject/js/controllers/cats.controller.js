function CatsController() {
  var controller = this;

  console.log('CatsController:', controller);

    controller.images = [
       '../../images/cat1.JPG',
       '../../images/cat2.JPG',
       'http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/1440438574/082415-trump-your-cat-2.jpg?itok=eZ5HGwM4'
    ];

  function init(){
  }
  init();
}





angular
  .module('miniProject')
  .controller('CatsController', CatsController);
