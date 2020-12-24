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