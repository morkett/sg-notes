console.log('in main.js');

var o = {};
var s = '';
var b = true;
var n = 1;
var a = [];

// Use type of to find out what each variable is
// #hint object, string, number, boolean, number, array
console.log('Using "typeof" operator:');
console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);


//
console.log('Playing with different types:');

var numberAsString = '5';
var number1 = 3;
var number2 = 7;

console.log(numberAsString + number1);
console.log(typeof(numberAsString + number1));
console.log(typeof(number1 + numberAsString));

console.log(number1 + number2);

// paresInt() - WHAT EVER I PUT IN HERE TURN INTO AN INTEGER
console.log(parseInt(numberAsString));

console.log(parseInt(numberAsString) + number1 + number2);

// WILL TURN REAL NUMBER (DECIMAL) AND CONVERT INTO AN INTEGER (ONLY A WHOLE NUMBER)
console.log(parseInt(3.1415927));
//DOESNT ROUND UP JUST CHOPS IT OFF
console.log(parseInt(3.56));
// parseFloat - KEEPS TO A REAL (FLOAT) NUMBER
console.log(parseFloat(3.56));

//IF STATMENTS
console.log('Control flow:');
var moneyInPocket = 20;

if (moneyInPocket > 10) {
    console.log('Another drink please!');
} else if (moneyInPocket > 5) {
    console.log('Make mine a half then');
} else {
    console.log('Time to go home');
}

console.log('It\'s all cool.');

////////////////////////////////////////////////////////////SWITCH STATMENTS
///////////////////////////////////////////////////////////
var countryOfOrigin = 'France';
var greeting = '';

switch (countryOfOrigin) {
    case 'France':
        greeting = 'Bonjour';
        break;

    case 'Spain':
        greeting = 'Hola!';
        break;
    case 'Indonesia':
        greeting = 'Selament sore';

        break;
    case 'Kenya':
        greeting = 'Jambo';
        break;
    default:
        greeting = 'Well Hello There';
        break;
}

///////////////////////////////////////////////////
console.log(greeting);

var dayOfWeek = 'friday'

if (moneyInPocket > 10 && dayOfWeek.toUpperCase() === 'FRIDAY') {
    console.log('Pub thisavo!');
} else {
    console.log('Bummer :-(');
}
///////////////////////////////////////////////////

console.log(greeting);

var dayOfWeek = 'friday'

if (dayOfWeek.toUpperCase() === 'FRIDAY' || dayOfWeek.toUpperCase() === 'THURSDAY') {
    console.log('Pub thisavo!');
} else {
    console.log('Bummer :-(');
}

/////////////////////////////////////////////////
//           truthy/falsey & arrays
////////////////////////////////////////////////
// null, undefined, 0, empty sting all classed as falsey

console.log('--- truthy/falsey:');
var truthyThings = [1, 0, 'something', '', -1];

for (var i = 0; i < truthyThings.length; i++) {
    console.log('  element', i, 'is: ', truthyThings[i]);
    if (truthyThings[i]) {
        console.log('----> true');
    } else {
        console.log('----> False');
    }
}






///////////////////////////////////////
// LOOPS
/////////////////////////////////////

var yourName = prompt('What is your name?');

if (yourName) {
    alert('Nice one, ' + yourName.charAt(0).toUpperCase() + yourName.slice(1));
} else {
    alert('Not sure what your name is!')
}

///////////////////////////////////////////
// WHILE LOOPS
///////////////////////////////////////////

console.log('\n ------ Loops:');
var question = 'Now using a while() loop...What is your name?';
yourName = prompt(question)
while (!yourName) {
    alert('Not sure what your name is!');
    yourName = prompt(question);
}
alert('Nice one, ' + yourName);


///////////////////////////////////////////
// DO / WHILE LOOP
///////////////////////////////////////////

do {
    yourName = prompt('Now using a do/while() loop...What is your name?');
    if (!yourName) {
        alert('Not sure what your name is!');
    }
} while (!yourName);
alert('Nice one, ' + yourName);
