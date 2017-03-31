
function FrisbeeController() {
  var controller = this;

  console.log('FrisbeeController:', controller);
  controller.images = [
     'https://s-media-cache-ak0.pinimg.com/736x/b4/09/47/b40947d421f8691f0d08088c178d6a96.jpg',
     'https://metrouk2.files.wordpress.com/2012/06/article-1340016298067-13a96eaf000005dc-468175_636x418.jpg',
     'https://s-media-cache-ak0.pinimg.com/564x/cf/70/92/cf7092cb4a26168f48a9ad28e957c680.jpg'
  ];
  function init(){
  }
  init();
}





angular
  .module('miniProject')
  .controller('FrisbeeController', FrisbeeController);
