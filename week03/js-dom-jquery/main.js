console.log('executed: main.js \n ');

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
