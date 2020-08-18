# FIT2102 PASS - Week 3

## Definitions

- **side effect** &mdash; A modification of state outside the local environment [\[1\]][1].
- **pure function** &mdash; A function that only returns a value &amp; always returns the same value for the same input [\[2\]][2].
- **referential transparency** &mdash; An expression that can be replaced with its corresponding value without changing the program's behaviour [\[3\]][3].

## JavaScript features for functional programming

JavaScript has several features that make it possible to practice functional programming. This is in addition to having map, filter, reduce and lambda functions. Familiarise yourself with these features and the ideas behind them to have an easier time completing future tutorials.

### Arrow function expressions

The fat arrow syntax provides a concise way of defining functions. It takes time to get used to them, but they are useful when you write curried functions.

```javascript
function operationOnTwoNumbers(f) {
  return function (x) {
    return function (y) {
      return f(x, y);
    };
  };
}
```

The same function rewritten using fat arrow syntax. Notice how concise this definition is.

```javascript
const operationOnTwoNumbers = (f) => (x) => (y) => f(x, y);
```

### Functions are objects

It is important to remember that functions are objects [\[4\]][4]. In other words, functions are data, and it is possible to use a function as an argument or a return value [\[5\]][5].

```javascript
const var1 = 1;
const var2 = var1;
console.log(var1); // Output: 1
console.log(var2); // Output: 1
```

`var2` points to the same value as `var1`. The same concept can be applied to functions.

```javascript
const var1 = (x) => x;
const var2 = var1;
console.log(var1); // Output: [Function]
console.log(var2); // Output: [Function]
```

`var2` points to the same function as `var1`.

You have seen functions that take in function arguments in your earlier tutorials.

```javascript
const imperativeSummer = (f, n) => {
  let result = 0;
  for (let i = 1; i < n; i++) if (f(i)) result += i;
  return result;
};
```

You have also seen functions that return a function, an example is `operationOnTwoNumbers`.

### Lexical scoping and closures

JavaScript has lexical scoping for its blocks. This means that a block's scope follows from where it is defined in the source code. `operationOnTwoNumbers` illustrates this concept well. The returned function has access to the variables just outside its immediate (block) scope. This is also known as a closure [\[6\]][6] and is what allows _currying_ [\[7\]][7].

## Higher Order Functions

A **higher order function** is a function that either takes in functions as arguments or returns functions [\[8\]][8]. `operationOnTwoNumbers` and `imperativeSummer` are examples of higher order functions.

Higher order functions allow us to curry functions, which then allow us to compose more functions using other functions.

Read more about this in Tim's notes [\[8\]][8].

## TypeScript

Refer to [\[9\]][9] and [\[10\]][10]

Converting tutorial 2 main.js to main.ts

[1]: https://en.wikipedia.org/wiki/Side_effect_(computer_science)
[2]: https://en.wikipedia.org/wiki/Pure_function
[3]: https://en.wikipedia.org/wiki/Referential_transparency
[4]: https://tgdwyer.github.io/javascript1/#functions-are-objects
[5]: https://tgdwyer.github.io/javascript1/#functions-as-parameters-to-other-functions
[6]: https://tgdwyer.github.io/javascript1/#closures
[7]: https://tgdwyer.github.io/higherorderfunctions/#curried-functions
[8]: https://tgdwyer.github.io/higherorderfunctions/
[9]: https://tgdwyer.github.io/typescript1/
[10]: https://www.typescriptlang.org/docs/handbook/basic-types.html
