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
function checkPrime(number) {
  let isPrime = true;

  if (number == 1) {
    console.log(" 1 is neither prime nor composite number");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is not a prime number`);
    }
  }
  // check if number is less than 1
  else {
    console.log(`${number} is not a prime number`);
  }
}

console.log(checkPrime(11));
