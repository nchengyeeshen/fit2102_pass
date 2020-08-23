# FIT2102 PASS - Week 4

## Definitions

- **Immediately Invoked Function Expression (IIFE)** - invoking a function immediately after declaring it

```typescript
function id(x) {
  return x;
}(1); // Return: 1

// Fat arrow equivalent
((x) => x)(1);
```

## Lazy Sequences

> "As an eager student at Monash University you will be unfamiliar with the concept of laziness, since you always do all your work as soon as possible because you love it so much." -- Tim Dwyer

Read Tim's notes over [here](https://tgdwyer.github.io/lazyevaluation/).

## Observables

An implementation of the Observer pattern, read more about it [here](https://refactoring.guru/design-patterns/observer).

Two main entities:

1. Observable
2. Observer / subscriber

Nothing happens until you have _subscribers_.

## Tutorial tips

### Exercises 1 - 4

1. Take note of the return types.
   - Sometimes you're returning a function and other times a `LazySequence`.
2. You have the option of constructing a new `LazySequence` to return
   - Apply this idea for `filter`, `take`, etc.
3. The approach to take is to gradually transform your input data into output data.
   - `exercise4Solution`

### Exercise 5

1. `piApproximation`
   - `createDot`
   - Two subscribers to `numberPairObservable`, one for estimating Pi's value and another for adding dots.
   - Estimate Pi's value
     1. Check if points are in the circle.
     2. Tally up the points in circle against total points.
     3. Divide number of points inside over total number of points.
     4. Multiply by 4.
     5. Update value on page.
   - Drawing dots correctly
     - Randomly generated values in the range [-1, 1]
2. `animatedRect`
   - Very similar to `animatedRectTimer`.
   - Same rectangle that is animated to the right for 1 second.
   - `.interval(...).pipe(take(...))` is unreliable.
   - Refer to RxJS docs for `takeUntil` and try to simulate its effect without importing it.
3. `keyboardControl`
   - Animation follows previous `animatedRect` & `animatedRectTimer`.
   - `merge` is an Operator instead of a static method, so syntax is `observable1.pipe(merge(...))`.
   - Choosing an animation without if or switch statements.
     - Each time an Observable fires, it emits a value.
     - Recall that functions can be used as values.
     - Can you select which animation function to call using these two facts?
