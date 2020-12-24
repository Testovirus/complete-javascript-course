/*
const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
const BMIJohn = massJohn / heightJohn ** 2;
const BMIMark = massMark / heightMark ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2077;

const jonas = "I'm " + firstName + ', a ' + (year -birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

/*
const age = 15;

if(age >= 18) {
    console.log('Sarah cans start learning how to drive👌');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cannot start driving license😢.
    Wait ${yearsLeft} years to be able to drive.`);
}

let century;
const birthYear = 1991;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
const BMIJohn = massJohn / heightJohn ** 2;
const BMIMark = massMark / heightMark ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);
if(markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
*/

/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //NaN not a number
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am' + 23 + 'years old');
console.log('I am' + '23' + 'years old');
console.log('I am' + String(23) + 'years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
//Five falsy values:
//0, undefined, null, NaN, '' (empty string)

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})) //Empty object;
console.log(Boolean(''));

const money = -1;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height = 0; //Error 
if(height) {
    console.log("Height is defined");
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
const age = '18';
if(age === 18) console.log('You just became an adult (strict)🎉');

if(age == 18) console.log('You just became an adult (loose)🎉');

const favorite = Number(prompt("What's your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23) {
    console.log('Cool 23 is an amazing number');
} else if(favorite === 7) {
    console.log('7 is also fine number');
} else {
    console.log("Number is not 23 or 7");
}

if(favorite !== 23 ) console.log('Why not 23?');
*/

/*
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able do drive');
} else {
    console.log("Someone else should drive");
}
*/

/*
//Coding challenge #3

const scoresDolphins = [96,108,89]; 
const scoresKoalas = [88,91,110];

const averageDolphinsScore = (scoresDolphins[1] + scoresDolphins[2] + scoresDolphins[3])/3; 
const averageKoalasScore = (scoresKoalas[1] + scoresKoalas[2] + scoresKoalas[3])/3; 

if (averageDolphinsScore > averageKoalasScore && ()) {
    console.log(`Dolphins average score (${averageDolphinScore}) is better than Koalas (${averageKoalasScore})`);
} else if (averageDolphinsScore < averageKoalasScore) {
    console.log(`Koalas average score (${averageKoalasScore}) is better than Dolphins (${averageDolphinScore})`);
} else {
    console.log("Draw");
}
*/

/*
const age = 23;
age >= 18 ? console.log('I like to drink 🍷') :
console.log('I like to drink water');

const drink = age >= 18 ?'wine 🍷' : 'water 🧴';

console.log(`I like to drink ${age >= 18 ?'wine 🍷' : 'water 🧴'}`);

*/

//Coding challenge #4

const bill = 20;
let tip = (bill >= 50 && bill <= 300) ? bill * 0.2 : bill * 0.15;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}`); 
