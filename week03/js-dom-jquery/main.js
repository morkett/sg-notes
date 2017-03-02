console.log('executed: main.js \n ');


document.addEventListener('DOMContentLoaded', function(){
  //DOMContentLoaded = same as $(document).ready




  console.log(document);

//Changing website title
  document.getElementsByTagName('title')[0].innerHTML = 'Title Change';

  console.log('\n--- using querySelectorAll\n ');



  console.log('\n--- Create Element\n ');

//var element to create
  var newListItem = document.createElement('li');

//Two Different methods to add class
  newListItem.className = 'selected';
  newListItem.setAttribute('class', 'selected');

// var of what to add
  newListItem.innerHTML = 'in America';



// we are going to call .appendChild on the parent <ul> Element
//that <ul> element has an id attribute

// now retrieve the DOM element that contains the list items,
// because we want to call .appendChild() on it.
// NOTE: we do NOT pass a CSS selector ('#item-list') to the
// .getElementById() method

// listContainer finds the id of the <ul> element that contains the li
  var listContainer = document.getElementById('item-list');

  listContainer.appendChild(newListItem);



//Change selected class color
  var selectedListItems = document.querySelectorAll('li.selected');



  for(var i=0; i < selectedListItems.length; i++) {
    console.log('selected list item style:  ',selectedListItems[i].style );
    selectedListItems[i].style.color = 'red';
  }


  console.log('\n--- DOM EVENTS\n ');

//add an eventlistener for listen for a click on the button

  var pressMyButton = document.getElementById('pressMyBtn');

  pressMyButton.addEventListener('click', function(){
    pressMyButton.innerHTML ='You just clicked all over me!';

    pressMyButton.setAttribute('class','color-change');

  });

});


$(function(){
  console.log('DOM LOADED: jQuery');
  console.log('---using jQuery');

  var listContainer = $('#item-list');
  var listItems = $('#item-list li');

  var newListItem = $('<li>new item appended by jQuery</li>').addClass('garish');
  var newListItem2 = $('<li>new item prepended by jQuery</li>').addClass('dull');


  listContainer.prepend(newListItem2);

  $('#pressMyBtn').click(function(){
    listContainer.append(newListItem);
  });

});
