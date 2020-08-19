"use strict";
/*
Complete the following table when you submit this file:

Surname     | Firstname | email | Contribution% | Any issues?
=============================================================
Person 1... |           |       | 25%           |
Person 2... |           |       | 25%           |
Person 3... |           |       | 25%           |
Person 4... |           |       | 25%           |

complete Worksheet 1 by entering code in the places marked below...

For full instructions and tests open the file worksheetChecklist.html
in Chrome browser.  Keep it open side-by-side with your editor window.
You will edit this file (main.js), save it, and reload the
browser window to run the test.
*/

/**
    Exercise 1
 */
const myObj = {
  aProperty: "string",
  anotherProperty: 0,
};

/**
    Exercise 2
 */
// Assigning functions to variable names, two possible syntaxes:
//     const operationOnTwoNumbers = function (someFunction) { ... };
//     const operationOnTwoNumbers = someFunction => ...
const operationOnTwoNumbers = (f: (x: number, y: number) => number) => (
  x: number
) => (y: number) => f(x, y);

/**
    Exercise 3
 */
const callEach = (fs: (() => void)[]) => fs.forEach((f) => f());

/**
 * Exercise 4 - Pure Methods on Array
 */
const addN = (n: number, arr: number[]) => arr.map((val, _) => val + n);
const getEvens = (arr: number[]) => arr.filter((val) => val % 2 === 0);
const multiplyArray = (arr: number[]) =>
  arr.reduce((b, a) => (a > 0 ? a * b : b), 1);

/**
 * Exercise 5 - Range
 */
const range = (n: number): number[] =>
  n - 1 >= 0 ? range(n - 1).concat([n - 1]) : [];

/**
 * Exercise 6 - Euler Problem 1
 */
const Euler1 = () =>
  range(1000)
    .filter((x) => x % 3 === 0 || x % 5 === 0)
    .reduce((b, a) => a + b, 0);

/**
 * Exercise 7 - Infinite Series Calculator
 */
const infinite_series_calculator = (
  n: number,
  transform: (_: number) => number,
  predicate: (_: number) => boolean,
  accumulate: (x: number) => (y: number) => number
) =>
  range(n)
    .filter(predicate)
    .map(transform)
    .reduce((b, a) => accumulate(b)(a));

/**
 * Exercise 8 - Calculate Pi
 */
const calculatePiTerm = (n: number) => (4 * n * n) / (4 * n * n - 1);
const skipZero = (x: number) => x !== 0;
const productAccumulate = operationOnTwoNumbers((a, b) => a * b);
const calculatePi = () =>
  2 *
  infinite_series_calculator(80, calculatePiTerm, skipZero, productAccumulate);

/**
 * Exercise 9 - Calculate e
 */
const factorial = (n: number): number => (n === 0 ? 1 : n * factorial(n - 1));
const calculateETerm = (n: number) => (n + 1) / factorial(2 * n + 1);
const alwaysTrue = () => true;
const sumAccumulate = operationOnTwoNumbers((a, b) => a + b);
const calculateE = () =>
  2 * infinite_series_calculator(50, calculateETerm, alwaysTrue, sumAccumulate);

/**
 * Exercise 10 - Calculate sin(x)
 */
const sinTerm = (x: number) => (n: number) =>
  (Math.pow(-1, n) * Math.pow(x, 2 * n + 1)) / factorial(2 * n + 1);
const sin = (x: number) =>
  infinite_series_calculator(50, sinTerm(x), alwaysTrue, sumAccumulate);
