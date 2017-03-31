function HomeController() {
  var controller = this;

  console.log('HomeController:', controller);
  console.log('this will change pic');
  controller.images = [
    'http://4.bp.blogspot.com/-i9qj20Om4Zs/UYshvXTJcoI/AAAAAAAAHkA/k3YQEoa0ZPg/s400/603760_454781201278701_1591909635_n.jpg',
    'http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/1440438574/082415-trump-your-cat-2.jpg?itok=eZ5HGwM4'
  ];

  function init(){
  }
  init();
}





angular
  .module('miniProject')
  .controller('HomeController', HomeController);
