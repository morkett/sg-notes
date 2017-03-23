$(function(){
  console.log('Page Is Loaded Bruv...');
//////////////////////////////////////////////////
 ///// MANUAL WAY
//////////////////////////////////////////////////

  function ajaxTheManualWay() {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.icndb.com/jokes/random');
  //add event listener to see when it is loaded
    request.addEventListener('load', function () {
      var json = JSON.parse(this.responseText);
      var jokeElement = document.getElementById('joke');
      jokeElement.innerHTML = json.value.joke;
      console.log('json:', json);
      console.log('json.value.joke',json.value.joke);
    });
    request.send();
  }

//////////////////////////////////////////////////
 ///// jQuery Way
//////////////////////////////////////////////////

  function ajaxTheJQueryWay(){
    $.get('http://api.icndb.com/jokes/random', function (data){
      console.log(data);
      $('#joke').html(data.value.joke);
    });
  }

// Function to randomise between both ways; so we can keep the old way; not really needed
  function selectRandomAjaxFunction (items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  var ajaxFunctions = [ajaxTheManualWay, ajaxTheJQueryWay];


  setInterval(function(){
    var randomAjaxFunction = selectRandomAjaxFunction(ajaxFunctions);
    randomAjaxFunction();
  }, 5000);
});
