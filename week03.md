# Week 03

## Recap (Week 1 - 3)

### What is [functional programming](https://en.wikipedia.org/wiki/Functional_programming)?

- It's another programming paradigm
  - As if that wasn't obvious from the unit name
- Uses _functions_ as the unit of computation
- Has a focus on limiting [side effects](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>)
  - Naturally leads to discussions about function [purity](https://en.wikipedia.org/wiki/Pure_function) and [immutability](https://en.wikipedia.org/wiki/Immutable_object)
- Based on [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus)
  - More on this in the later weeks
  - [Equivalent to Turing machines](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis), also mentioned in FIT2014

### What's a side effect?

```python
my_var = [1, 2, 3]


def my_function(var):
    var.append(4)


if __name__ == "__main__":
    print(my_var)  # [1, 2, 3]
    my_function(my_var)
    print(my_var)  # [1, 2, 3, 4]
```

What if `my_var` was an integer?

```python
my_var = 1


def my_function(var):
    var += 1


if __name__ == "__main__":
    print(my_var)  # 1
    my_function(my_var)
    print(my_var)  # 1
```

### JavaScript / ECMAScript 2017

#### Variables

```javascript
let a = 1; // Mutable reference
const b = 2; // Immutable reference

a = 2; // This works
b = 3; // Uncaught TypeError: invalid assignment to const 'b'This won't work

const c = [1, 2, 3];

c.push(4); // Will this work?
```

#### Control flow

```javascript
if (condition1) {
  // some operation
} else if (condition2) {
  // some other operation
} else {
  // some some other operation
}

switch (expression) {
  case case1:
    // some operation
    break;
  case case2:
    // some other operation
    break;
  default:
    // some some other operation
    break;
}
```

Ternary expressions kinda fall into variable assignment but they can also be used for simple flow control.

```javascript
let myVar = condition ? "true" : "false";

condition ? function1() : function2();
```

#### Loops

```javascript
let i = 0;
while (i < 2) {
  console.log(i); // 0, 1, 2 on separate lines
  i++;
}

// Equivalent to the while loop above
for (let i = 0; i < 2; i++) {
  console.log(i);
}

// Equivalent to Python's for loop / foreach
const arr = [1, 2, 3];
for (val in arr) {
  console.log(val); // 1, 2, 3 on separate lines
}
```

#### Functions

```javascript
function my_function(arg) {
  // some operation
}

const my_function = (arg) => {
  // some operation
};
```

#### Note about the equality operator

```javascript
1 == "1"; // true, WTF

1 === "1"; // false, OK
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

#### Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://learnxinyminutes.com/docs/javascript/
