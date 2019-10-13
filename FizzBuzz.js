/* 
 * Fizzbuzz Algorithm
 * Return 'Fizz' if the input number is divisible by 3
 * Return 'Buzz' if the input number is divisible by 5
 * Return 'FizzBuzz' if the input number is divisible by 3 & 5
 * Return 'number' if the input number is not divisible by 3 or 5
 * Return 'Not a Number' if the input is not a number
 */ 

console.log(fizzbuzz('1'));

function fizzbuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    if ((input % 3 === 0) && (input % 5 === 0)) 
        return 'FizzBuzz';
    if (input % 3 === 0) 
        return 'Fizz';
    if (input % 5 === 0) 
        return 'Buzz';

    return input;
}