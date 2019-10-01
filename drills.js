'use strict';


// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countSheep (n) {
  if (n<=0 || typeof(n) !== 'number') {
    console.log('All sheep jumped over the fence.')
  } else {
    console.log(`${n}: Another sheep jumps over the fence`)
    countSheep(n-1)
  }
}

//Linear

function countSheepIt (n) {
  for (let i=n; i>=0; i--) {
    if (i===0) console.log('All sheep jumped over the fence')
    else console.log(`${i}: Another sheep jumps over the fence`)
  }
}

//linear


// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

function powerCalculatorRec (base, exponent) {
  if (exponent < 0) {
    return 'exponent should be >= 0'
  } else if (base < 0) {
    return 'base should be >= 0'
  } else if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return base;
  } else {
    return (base * (powerCalculatorRec(base, exponent-1)))
  }
}

//linear - proportional to the exponent

function powerCalculatorRecIt (base, exponent) {
  let result = 1
  for (let i=0; i<exponent; i++) {
    result *= base
  }
  return result
}

//linear - proportional to the exponent




// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString (string) {
  if (typeof(string) !== 'string') return 'input value must be a string'
  if (string.length > 0) {
    const lastchar = string[string.length-1];
    return lastchar + reverseString(string.slice(0, -1));
  } else {
    return ''
  }
}

// linear

function reverseStringIt (string) {
  let reversed = '';
  for (let i=1; i<=string.length; i++) {
    reversed += string[string.length-i];
  }
  return reversed;
}

// linear


// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

//  1st       2nd           3rd             nth?  

function nthTriangularNumber (n) {
  if (n < 1 || typeof(n) !== 'number') return 'n must be a number >= 1'
  n = Math.floor(n);
  if (n === 1) {
    return 1;
  } else {
    return (n + nthTriangularNumber(n-1))
  }
}
// linear


function nthTriangularNumberIt (n) {
  let triangle = 0;
  for (let i=0; i<=n; i++) {
    triangle += i;
  }
  return triangle;
}
// linear


// 5. String Splitter
// Write a recursive function that split a string based on a separator (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.
// Input: 02/20/2020
// Output: 02202020

function stringSplitter (string, character) {
  if (typeof(string) !== 'string' || typeof(character) !== 'string') {
    return 'input parameters must be strings'
  } else if (string.length === 0) {
    return ''
  } else if (string[0] === character) {
    return '' + stringSplitter(string.slice(1), character)
  } else {
    return string[0] + stringSplitter(string.slice(1), character)
  }
}
// linear - proportional to the string

function stringSplitterIt (string, character) {
  let stringCopy = '';
  for (let i=0; i<string.length; i++) {
    if (string[i] !== character) stringCopy += string[i];
  }
  return stringCopy;
}

// linear proportional to string

// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.



function fibRecursive (n) {
  if (n<1) {
    return 0;
  } else if (n===1) {
    return 1;
  } else {
    return fibRecursive(n-1) + fibRecursive(n-2);
  }
}

function fibSequenceRecursive (n) {
  let returnSequence =[];
  for (let i=0; i<n; i++) {
    returnSequence[i] = fibRecursive(i+1)
  }

  console.log(returnSequence)
}
//exponential

function fibonacciIt (n) {
  let returnSequence = [];
  for (let i=0; i<n; i++) {
    if (i <= 1) {
      returnSequence[i] = 1;
    } else {
      returnSequence[i] = returnSequence[i-1] + returnSequence[i-2];
    }
  }
  return returnSequence;
}

//linear

// 7. Factorial
// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by each number between itself and 1. 
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
  if (n===1) {
    return 1
  } else return (n*factorial(n-1))
}
// linear

function factorialIt (n) {
  let result = 1;
  for (let i=n; i>0; i--) {
    result *= i;
  }
  return result;
}

//linear
