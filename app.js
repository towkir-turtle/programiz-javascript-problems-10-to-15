// Example-11: Javascript Program to Check if a Number is Odd or Even
// Method-01:
function checkOddEven(num) {
  if (num % 2 == 0) {
    console.log("The number is Even");
  } else {
    console.log("The number is odd");
  }
}
const check = checkOddEven(10);
console.log(check);

// Method-2:
const number = 10;
const result = number % 2 == 0 ? "Even" : "odd";
console.log(result);

// Example-12: JavaScript Program to Find the Largest Among Three Numbers
// Method-01:
const num1 = 626;
const num2 = 434;
const num3 = 942;
let largest;
if (num1 > num2 && num1 > num3) {
  largest = num1;
} else if (num2 > num1 && num2 > num3) {
  largest = num2;
} else {
  largest = num3;
}
console.log(`The largest number is: ${largest}`);

// Method-02:
const largest2 = Math.max(num1, num2, num3);
console.log(largest2);

// Example-13: JavaScript Program to Check Prime Number
function primeNumber(num) {
  let isPrime = true;

  if (num === 1) {
    console.log("1 is neither prime nor composite number");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % 2 == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${num} is a prime number`);
    } else {
      console.log(`${num} is not a prime number`);
    }
  } else {
    console.log(`${num} is not a prime number`);
  }
}

console.log(primeNumber(-9));

// Example-14: JavaScript Program to Print All Prime Numbers in an Interval
function printPrimeNumbers(lowerNumber, higherNumber) {
  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}
console.log(printPrimeNumbers(2, 10));

// Example-15: JavaScript Program to Find the Factorial of a Number
function factorial(n) {
  let fact = 1;
  for (i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
