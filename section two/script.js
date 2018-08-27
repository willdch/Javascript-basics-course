/***********************
 * Variables and datatypes
 */
/*
var firstName = 'John';
console.log(firstName);

var lastNamwe = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variable naming rules: they cannot start with numbers or symbols except for the $ and _ (underscore). aslo cannot use resrived JS keywords and variable names.
var $3years = 3; 
var johnMark = 'john and mark';
// var if = 23;
*/

/****************************************
 * Vaiable mutation and Type coerion
 */
/*
var firstName = 'John';
var age = 28;

//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
* Basic Oporators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operatiors
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// Typeof operator
console.log( typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);





/***********************************
 * Operator proceedence
 */

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators 
var isFullAge = now - yearJohn >=fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*
var massMark = 78;
var hieghtMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95

var BNIMark = massMark / (hieghtMark * hieghtMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BNIMark, BMIJohn);

var markHigherBMI = BNIMark > BMIJohn;
console.log(`Is Mark's BMI higher than John's? ` +  markHigherBMI);
*/

/****************************************
 * If / else statements
 */

// var firstName = 'John';
// var civilStatus = 'Single';

// if (civilStatus === 'married'){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

/*********************************
 * coding challange
 */

// var massMark = 78;
// var hieghtMark = 1.69;

// var massJohn = 92;
// var heightJohn = 1.95

// var BMIMark = massMark / (hieghtMark * hieghtMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI is higher than John's.`)
// } else {
//     console.log(`John's BMI is higher than Mark's.`)
// }

// var markHigherBMI = BMIMark > BMIJohn;
// console.log(`Is Mark's BMI higher than John's? ` +  markHigherBMI);

/************
 * Boolean Logic
 */

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {//between 13 and 20 === age >= 13 AND age < 20
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.');
// }


/*************
 * The Ternary operator and seitch statements
 * also know as a conditional operator
 */

//  var firstName = 'John';
//  var age = 22;

//  // ternary operator
//  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName +' drinks juice.') 

//  var drink = age >= 18 ? 'beer' : "juice";
//  console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Seitch Statements

// var job = 'cop';
// switch (job) {
//     case 'teacher': 
//     case 'instuctor':
//     console.log(firstName + ' teaches kids how to code.');
//   case 'driver':
//     console.log(firstName + ' drives and uber in Lisbon.');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs beautifil websites.');
//   break;
//   default:
//     console.log(firstName + ' does something else.');      
// }

// age = 56;
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager.');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man.');
//     break; 
//   default:
//     console.log(firstName + ' is a man.');
// }


/***************************************************************
 * Truthy and falsy values and equality operators
 */

// falsy values are: undefined. null, 0, ' ', Nan
// truthy values: Not falsy values

// var height;

// height = 23;

// // strict equality operator ===
// if (height || height === 0) {
//     console.log('Variable is defined' + ': ' + height);
// } else {
//     console.log('Variable has not been defined');
// }


// Equality operators
// == does not care about data types
// if (height == '23') {
//     console.log('the == operatpr does type coercion');
// }

//my attempts

// var teamJohn = (116 + 94 + 123)/3;
// var teamMike = (116 + 94 + 123)/3;
// var teamMary = (97 + 134 + 105)/3;
// console.log(teamJohn, teamMark);


// teamJohn > 121 ? console.log('Team John: ' +  teamJohn): console.log('Team Mike: ' + teamMark);

// var teamJohn + teamMike + teamMary = teamScore;
// if (teamScore >= 111) {
//     console.log('Team John: ' +  teamJohn);
// } else (teamMike >= 111) {
//     console.log('Team Mike: ' + teamMike);
// } else (teamMary >= 111) {
//     console.log('Team Mary: ' + teamMary);
// } if else ()

//instructor answer****************

// var scoreJohn = (189 + 120 + 103) / 3;
// var scoreMike = (129 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && scoreMary)
// {
//     console.log(`John's team wins with ` + scoreJohn + ' points!');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary){
//     console.log(`Mike's team wins with ` + scoreMike + ' points!');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log(`Mary's team wins with ` + scoreMary + ' points!');
// }else {
//     console.log('there is a draw');
// }

/*if (scoreJohn > scoreMike) {
    console.log(`john's team wins with ` + scoreJohn + ' ppoints');
} else if (scoreMike > scoreJohn) {
    console.log(`Mike's team wins with ` + scoreMike + ' points');
} else {
    console.log('there is a draw');
}*/

/*******************
 * functions
 */

 /******************************** 
  * code for fun
  * 
 function calculateSkill(score) {
     return 1000 - score;
 }

 var skillWill = calculateSkill(950);
 console.log(skillWill);

 if (skillWill < 1000) {
     console.log('Will is no master coder yet!')
 }else {
     console.log('Will is a master coder!');
 }
*/


// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirment(year, firstName) {
//     var age = calculateAge(year);
//     var retirment = 65 - age;

//     if (retirment > 0) {
//         console.log(firstName + ' retires in ' + retirment + ' years.');
//     }else {
//         console.log(firstName + ' is already retired!')
//     }
    
// }

// yearsUntilRetirment(1990, 'John');
// yearsUntilRetirment(1948, 'Mike');
// yearsUntilRetirment(1969, 'Jane');

/**************************************************************************************
 * function statements and expressions
 */

 //Function Declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
//  var whatDoYouDo = function(job, firstName) {
//      switch(job) {
//          case 'teacher':
//             return firstName + ' teaches kids how to code.';
//          case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//          case 'designer':
//             return firstName + ' designs beautiful websites.'
//          default:
//             return firstName + ' does something else.'
//      }      
//  }

//  console.log(whatDoYouDo('teacher', 'John'));
//  console.log(whatDoYouDo('retired', 'Mike'));
//  console.log(whatDoYouDo('designer', 'Jane'));

/********************
 * Arrays
 */

 //initialze new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names);
//  console.log(names.length);

//  //mutate array data
//  names[1] = 'Ben';
//  names[names.length] = 'Marry';
//  console.log(names);

//  // Different Data types

//  var John = ['John', 'Smith', 1990, 'teacher', false];

// John.push('blue');
// John.unshift('Mr.');

// console.log(John);

// John.pop();
// John.pop();
// John.shift();
// console.log(John);

// console.log(John.indexOf(23));

// var isDesigner = John.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);


/******************
 * coding challange - simple Tip calculator
 */

//  function tipCalculator(bill) {
//      var percentage;
//      if (bill < 50) {
//          percentage = .2;
//      }else if (bill >= 50 && bill < 200) {
//          percentage = .15;
//      } else {
//          percentage = .1;
//      }
//      return percentage * bill;  
//  }
//  console.log(tipCalculator(10));

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// var finalValues = [bills[0] + tips[0],
//                   bills[1] + tips[1],
//                   bills[2] + tips[2]];

// console.log(tips, finalValues);

/*************************************************
 * Objects and properties
 */


 // Object literal - a way of defining objects - var ? = { object info inside curly braces }
//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1990,
//      family: ['Jane', 'Bob', 'Mark', 'Emily'],
//      job: 'teacher',
//      isMarried: false
//  };
// console.log(john);
// // Use dot method to access the key values of the above object. IE = john.firstName
// console.log(john.firstName);
// // Can also use brackets to retrieve the elements from an object - ['name in a string ']
// console.log(john['lastName']);
// // Can create a variable for the elements in the object to shorten the syntax - example - var x = 'birthYear';
// var x = 'birthYear';
// console.log(john[x]);


// // Can also use dot notation to mutate the properties. - in the object isMarried is false - mutated to true with dot or brackets.
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// var jane = {
// firstName: 'Jane',
// birthYear: 1969,
// lastName: 'Smith'
// }
// console.log(jane);


/***********************************************************
 * Objects and methods - objects can hold differnt types of data includeing arrays and even other objects.
 * We can alos attach functions to objects and they are called METHODS.
 */

// var john = {
//          firstName: 'John',
//          lastName: 'Smith',
//          birthYear: 1990,
//          family: ['Jane', 'Bob', 'Mark', 'Emily'],
//          job: 'teacher',
//          isMarried: false,
//          // Creating a funtion to calculate the age by subtracting the current year from the birth year. 
//          // using the arrow function; () => or 'function()'  this.birthYear does not work with an and arrow function ()=> WHY?
//          calage: function() {
//             this.age = 2018 - this.birthYear;
//          }
//      };

//      john.calage();
//      console.log(john);
     // ARRAYS ARE ALSO TECHNICALLY oBJECTS - BECAUSE ONLY OBJECTS HAVE METHODS.


/********************************************************************************************
 * coding challange
 */

//  let mark = {
//      fullName: 'Mark Hamill',
//      mass: 78,
//      height: 1.69,
//      calcBMI: function() {
//          this.bmi = this.mass / (this.height * this.height);
//          return this.bmi;
//      }
//  };

//  let john = {
//      fullName: 'John Wayne',
//      mass: 92,
//      height: 1.95,
//      calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//      }
//  };

// //  john.calcBMI();
// //  mark.calcBMI();
// //  console.log(john, mark);

// if ( john.calcBMI() > mark.calcBMI()) {
//     //  if (john.bmi > mark.bmi) or this
//      console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
//  } else if (mark.bmi > john.bmi) {
//      console.log( mark.fullName + ' has a higher BMI of ' + mark.bmi);
//  } else {
//      console.log('they have the same BMI');
//  }

/*********************************************************************
 * Loops and iterations - some more control structures
 */

 // FOR LOOPS - have three parts - initial value, the condition evaluated before each iteration, an update after each iteration.
    
 //initial value //condition //updated iteration
//  for (var i = 0; i <= 20; i++) { // to increase by two use ( i += 2, )
//     console.log(i);
//  }

// i = 0, 0 < 10 true, log i to console. i++
// I = 1, 1 < 10 true, log i to console. i++
// I = 2, 2 < 10 true, log i to console. i++
//....
// I = 9, 9 < 10 true, log i to console. i++
// I = 10, 10 < 10 FALSE, exit the loop! and will no longer run the loop.

//to include the final number use <= (less than or equal to)

//  var john = ['John', 'Smith', 1990, 'teacher', false];
 
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// var family = ['Will', 'Craven', 'Matthew', 'Rebekah', 36, 41, 39, 26];

// for (var fam = 0; fam < family.length; fam++) {
//     console.log(family[fam]);
// }

// WHILE LOOP - only needs conditon and update - this works but it is much easier to use a for loop. i = 0 is common but I used fam just to see it work.
// var fam = 0;
// while(fam < family.length) {
//     console.log(family[fam]);
//     fam++;
// }


// continue and break statemnets.
// different operators ( strict: !==,  normal: != )

//CONTINUE***************************************************
//  var john = ['John', 'Smith', 1990, 'teacher', false];
 
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string' ) continue; // if statements useually have {}'s butif it is on one line you can ommit them and do it like this.

                // OR //

    // if (typeof john[i] !== 'string') {
    //     continue;
    // } // normal if statemnet synatax
    // console.log(john[i]);
// }

// BREAK*************************************************
// Break exits the current iteration and the entire loop as well meaning it does not continue to the next iteration.

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string' ) break;
//     console.log(john[i]);
// }

// LOOPING BACKWRADS**********************************
// var john = ['John', 'Smith', 1990, 'teacher', false, 'green', 'butternut', 2018];

// for (var i = john.length -1; i >= 0; i--) {
//     console.log(john[i]);
// }


/**************************************************************
 * Coding Challange - advandced Tip calculator
 */

// let john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];

//         for( var i = 0; i < this.bills.length; i++) {
//             // Determined percentages based on tipping rules
//             let percentage;
//             let bill = this.bills[i];

//             if (bill < 50) {
//                 percentage = .2;
//             }else if ( bill >= 50 && bill < 200) {
//                 percentage = .15;
//             }else {
//                 percentage = .1;
//             }
//             // add result to corsponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;

//         }
//     }
// }

// // Second half of challange MARK

// let mark = {
//     fullName: 'Mark Hamill',
//     bills: [ 77, 475, 110, 45],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];

//         for( var i = 0; i < this.bills.length; i++) {
//             // Determined percentages based on tipping rules
//             let percentage;
//             let bill = this.bills[i];

//             if (bill < 100) {
//                 percentage = .2;
//             }else if ( bill >= 100 && bill < 300) {
//                 percentage = .1;
//             }else {
//                 percentage = .25;
//             }
//             // add result to corsponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;

//         }
//     }
// }

// function calcAverage(tips) {
//     let sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }
// // if we were to pass in an arrat of  [2, 6, 4] -> 0 / 2 / 8 / 12
// // Do calculations

// john.calcTips();
// mark.calcTips();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
//     console.log(john.fullName + `'s family pays higher tips, with an average of $` + john.average);
// }else if (mark.average > john.average) {
//     console.log(mark.fullName + `'s family pays higher tips, with an average of $` + mark.average)
// }else {
//     console.log(`both families tips the same amount`);
// }







