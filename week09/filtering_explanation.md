`filtering` has the following function definition.

```haskell
filtering p = foldr (rollerA p) (pure [])
```

We can further expand this by substiting the implementation of `rollerA`

```haskell
rollerA p a = lift (consIf a) (p a)
```

Therefore, `filtering` restated looks like this

```haskell
filtering p = foldr (lift (consIf a) (p a)) (pure [])
```

At each 'iteration', we will be evaluating `lift (consIf a) (p a)`.

What does an application of `(consIf a) (p a)` look like?

Imagine that we are calling filtering like so

```haskell
filtering (const [True, True]) [1]
```

We only have one iteration to deal with, so we'll only have one call to `lift (consIf a) (p a)`. `const [True, True]` means we will have two calls to `(consIf a) (p a)` due to the applicative effect.

```haskell
consIf 1 True [] = 1 : [] = [1]
```

Therefore

```haskell
lift (consIf 1) ((const [True, True]) 1) [[]] = [[1], [1]]
```

What if we tried another evaluation of `filtering`?

```haskell
filtering (const [True, True]) [1, 2]
```

We have already seen the evaluation of an element with a single list. Since `filtering` is defined in terms of `foldr`, the first element to be evaluated with `rollerA` is `2`.

This gives us an accumulator value of `[[2], [2]]`.

The next value to be evaluated is `1`.

Let's look at the evaluation of `rollerA`.

```haskell
rollerA (const [True, True]) 1 [[2], [2]]
```

We know that `rollerA` does a series of `consIf` evaluations as we dig deeper. What does that look like?

```haskell
consIf 1 True [2] = 1 : [2] = [1, 2]
```

Due to the applicative effect, we will see that for each element in the list, `[[2], [2]]`, we will get `[[1, 2], [1, 2]]`. Since there's two elements in the list, the result will look like this.

```haskell
lift (consIf 1) ((const [True, True]) 1) [[2], [2]] = [[1, 2], [1, 2], [1, 2], [1, 2]]
```

Finally, we've come to the actual evaluation we're interested in.

```haskell
filtering (const $ [True, True]) [1, 2, 3]
```

Skipping ahead the evaluation of elements `3` and `2`.

We reach a call to `rollerA` like so

```haskell
rollerA (const [True, True]) 1 [[2, 3], [2, 3], [2, 3], [2, 3]]
```

Each call to `consIf` gives this result

```haskell
consIf 1 True [2, 3] = 1 : [2, 3] = [1, 2, 3]
```

Each `lift` call gives two results of `consIf` due to `[True, True]`. Each element in the list, `[[2, 3], [2, 3], [2, 3], [2, 3]]`, requires a call to `lift`.

In other words, this happens for every element `[2, 3]`.

```haskell
lift (consIf 1) ((const [True, True]) 1) [[2, 3]] = [[1, 2, 3], [1, 2, 3]]
```

Therefore, we should have a total of 8 elements.

```haskell
filtering (const $ [True, True]) [1, 2, 3]
= [[1,2,3],[1,2,3],[1,2,3],[1,2,3],[1,2,3],[1,2,3],[1,2,3],[1,2,3]]
```
