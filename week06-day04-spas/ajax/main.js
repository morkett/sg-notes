$(function(){
  var jokeURL = 'http://api.icndb.com/jokes/random';
  console.log('Page Is Loaded Bruv...');
//////////////////////////////////////////////////
 ///// MANUAL WAY
//////////////////////////////////////////////////

  function ajaxTheManualWay() {
    var request = new XMLHttpRequest();

    request.open('GET', jokeURL);
  //add event listener to see when it is loaded
    request.addEventListener('load', function () {
      var json = JSON.parse(this.responseText);
      var jokeElement = document.getElementById('joke');
      jokeElement.innerHTML = json.value.joke;
      console.log('manual way');
    });
    request.send();
  }

//////////////////////////////////////////////////
 ///// jQuery Way
//////////////////////////////////////////////////

  function ajaxTheJQueryWay(){
    $.get(jokeURL, function (data){
      $('#joke').html(data.value.joke);
      console.log('jQuery');
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
