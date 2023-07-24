/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

const fizzBuzz = (num1) => {
    if (num1 % 3 === 0 && num1 % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num1 % 3 === 0) {
        console.log("Fizz");
    } else if (num1 % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log("Pop");
    }
};

/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
//let result = averager(prices);
//console.log(result);

const averager = (array) => {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        console.log(array[i]);
        total += array[i];
    }
    console.log("The average of the array is:", (total / array.length));

}

let result = averager(prices);
console.log(result);

/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/

const celToFah = (num) => {
    let result = num * 1.8 + 32;

    console.log(num, "°C is ", result.toFixed(2), "F");
};

const celToKel = (num) => {
    let result = num + 273.15;

    console.log(num, "°C is", result.toFixed(2), "K");
};

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

const pow = (x, y) => {
    let result = 1;
    for (let i = 0; i < y; i++) {
      
        result *= x;
    }
    console.log(result);    
}
