console.log(' in main.js \n\n "Objects, functions and Scope" \n ');





var person1 = {
  firstName: 'Bob', //property
  lastName: 'le Plant', //property
  email: 'bob@spartaglobal.co', //property
  age: 12.5 //property
};
var person2 = {
  firstName: 'Aretha', //property
  lastName: 'Franklin', //property
  email: 'ms.legend@example.com', //property
  age: 29 //property
};
var person3 = {
  firstName: 'Joe', //property
  email: 4, //property
  hobbies: ['boxing', 'hitting'] //property
};

var people = [person1, person2, person3];

//TASK: write a loop to use `console.log()` to print out each person's first name and age


//SOLUTION
for (var i = 0; i < people.length; i++) {
  console.log(people[i].firstName, people[i].age); //comma between console commands creates space
}
//SOLUTION



//- write an `if()` statement to check to see if `{}` equals `{}`
//- use `console.log()` to print an appropriate message for both conditions
//- try with both types of comparison operators and see if there is a difference

//SOLUTION
var a = {};
if (a === {}) {
  console.log('Yeah they are equal!');
} else {
  console.log('NOT! They are not equal!');
}
// NOT EQUAL BECAUSE {} in JS is a shortcut for newObject{};



//CREATE A FUNCTION THAT CREATES AN OBJECT - NO NEED TO MANUALLY DO IT LIKE THE person1, person2 ABOVE
console.log('\n--- Functions \n ');

var capitalCity = 'London'; //GLOBAL VARIABLE CAN BE USED BY A LOCAL FUNCTION - BAD PRACTICE TO USE GLOBAL

//orange are parameters
function createPerson(firstName, lastName, email, age){
  var newPerson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    capitalCity: capitalCity,
    fullName: function() {
      return firstName + ' ' + lastName + ' from ' + capitalCity + '.'; //A METHOD IN AN OBJECT or FUNCTION
    }
  };
  return newPerson; //RETURN SENDS IT BACK OUT FOR GLOBAL SCOPE
}

//HARALDs FULL NAME
var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('new person\'s full name:', harald.fullName()); //To call a function from object remeber () at the end
var david = createPerson('David', 'Corkett', 'dcorkett@example.com', 27);
var asma = createPerson('Asma', 'Chaima', 'achaima@example.com', 21);

people = [];

//push people to empty array
people.push(david, asma, harald);


//IS HARALD OLD ENOUGH TEST
function isOldEnough(age) {
  return (age >= 18);
}

if (isOldEnough(harald.age)) {
  console.log('Come in');
} else {
  console.log('Come back when you are older');
}

var oldEnoughComment;
for (i = 0; i < people.length; i++) {
  oldEnoughComment = (isOldEnough(people[i].age)) ?
        'is old enough' :
        'is NOT old enough';

  console.log(people[i].fullName(), oldEnoughComment);
    //Ternary Operator - shorcut of the below

    // if (isOldEnough(people[i].age)) {
    //     console.log(people[i].fullName(), 'is old enough');
    // } else {
    //     console.log(people[i].fullName(), 'is not old enough');
    // }
}

console.log('--- OO Javascript:');

function Circle(radius) {
  this.radius = radius;
    // one way to write an instance method
  this.circumference = function() {
    return 2 * Circle.PI * this.radius;
  };
}

// static (or class) property/variable:
Circle.PI = 22 / 7;

// another way to write an instance method:
// add it to the prototype
Circle.prototype.area = function() {
  return Circle.PI * this.radius * this.radius;
};

var coin = new Circle(1.2);
var plate = new Circle(7);
var circles = [coin, plate];

for (i = 0; i < circles.length; i++) {
  console.log('Radius is:', circles[i].radius);
  console.log('Circumference is:', circles[i].circumference());
  console.log('Area is:', circles[i].area());
}
