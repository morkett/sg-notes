# ES6-Features

##Top Features of ES6


###Arrow Functions

####Before: 

```js
var _this = this
$('.btn').click(function(event){
  _this.sendData()
})
```

####With ES6: 

```js
$('.btn').click((event) =>{
  this.sendData()
})
```

--

###Block Scoping - Let, Const

####Before:

```js
function calculateTotalAmount (vip) {
  var amount = 0
  if (vip) {
    var amount = 1
  }
  { // more crazy blocks!
    var amount = 100
    {
      var amount = 1000
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true)) 

//The result will be 1000

```

####With ES6

```js
function calculateTotalAmount (vip) {
  var amount = 0 // probably should also be let, but you can mix var and let
  if (vip) {
    let amount = 1 // first amount is still 0
  } 
  { // more crazy blocks!
    let amount = 100 // first amount is still 0
    {
      let amount = 1000 // first amount is still 0
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true))



//The value is 0, because the if block also has let. If it had nothing (amount=1), then the expression would have been 1.

```

--

###Default Parameters in ES6

####Before:

```js
var link = function (height, color, url) {
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://azat.co'
    ...
}

``` 
 ####With ES6:

In ES6, we can put the default values right in the signature of the functions:

```js
var link = function(height = 50, color = 'red', url = 'http://azat.co') {
  ...
}
```

--

### Template Literal in ES6 - Back Ticks

####Before:

```js
var name = 'Your name is ' + first + ' ' + last + '.'
var url = 'http://localhost:3000/api/messages/' + id

```

####With ES6


```js
//We can use a new syntax ${NAME} inside of the back-ticked string:

var name = `Your name is ${first} ${last}.`
var url = `http://localhost:3000/api/messages/${id}`

```

####Multi-line Strings in ES6

####Before:

```js
var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t'

var fourAgreements = 'You have the right to be you.\n\
    You can only be you when you do your best.'
```

####With ES6:

```js
//####With ES6 we can use backticks

var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`

var fourAgreements = `You have the right to be you.
    You can only be you when you do your best.`

```

--

###Promises

####Before: 

```js
setTimeout(function(){
  console.log('Yay!')
  setTimeout(function(){
    console.log('Wheeyee!')
  }, 1000)
}, 1000)

```

####With ES6 Promise 

```js
var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})

wait1000()
    .then(function() {
        console.log('Yay!')
        return wait1000()
    })
    .then(function() {
        console.log('Wheeyee!')
    });
```

--
###Spread Operators

[Mr David Walsh - 6 Great Uses Of Spread Operators](https://davidwalsh.name/spread-operator)



--


###Modules 

####Before:

```js
module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}

//In ES5 main.js, we would require('module') that dependency:

var service = require('module.js')
console.log(service.port) // 3000
```

####With ES6:

```js
export var port = 3000
export function getAccounts(url) {
  ...
}
//In the importer ES6 file main.js, we use import {name} from 'my-module' syntax. For example,

import {port, getAccounts} from 'module'
console.log(port) // 3000
```
--

ES6 is finalized, but not fully supported by all browsers (e.g., ES6 Firefox support). To use ES6 today, get a compiler like `Babel`. You can run it as a standalone tool or use with your build system. There are Babel plugins for Grunt, Gulp and Webpack.

--

###Classes

####Before:

```js
function Car( make ) { //approximate a class/constructor
   this.make = make;
   this.currentSpeed = 25;
    
   this.printCurrentSpeed = function(){ //expose a function
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}
 
// Instantiate a new car
var moderatelyPricedCar = new Car( "Kia");
moderatelyPricedCar.printCurrentSpeed(); //Kia is going 25 mph. 
```

####With ES6:

Use the `class`, `constructor`, `extend`, `let` keywords

```js
class Car {
    constructor(make) { //constructors!
        this.make = make;
      this.currentSpeed = 25;
    }

    printCurrentSpeed(){
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}

class RaceCar extends Car { //inheritance
    constructor(make, topSpeed) {
        super(make); //call the parent constructor with super
        this.topSpeed = topSpeed;
    }

    goFast(){
          this.currentSpeed = this.topSpeed;
    }
}

let stang = new RaceCar('Mustang', 150);

stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();
```

--

[Cheat Sheets](https://node.university/p/library)

[Video](https://www.youtube.com/watch?v=AfWYO8t7ed4)

--

####Sources: 

[web app log](https://webapplog.com/es6/)

[wintellect.com](http://www.wintellect.com/devcenter/nstieglitz/5-great-features-in-es6-harmony)
