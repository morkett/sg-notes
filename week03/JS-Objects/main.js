console.log(' in main.js \n\n "Objects, functions and Scope" \n ');

//THIS IS AN ARRAY []
var ages = [
    24,
    23,
    29,
    32
];


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

function createPerson(firstName, lastName, email, age) //orange are parameters
{
    var newPerson = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age
    };
    return newPerson; //RETURN SENDS IT BACK OUT FOR GLOBAL SCOPE
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('newPerson:', harald);



//IS HARALD OLD ENOUGH TEST
function isOldEnough(age) {
    return (age >= 18);
}

if (isOldEnough(harald.age)) {
    console.log('Come in');
} else {
    console.log('Come back when you are older');
}
