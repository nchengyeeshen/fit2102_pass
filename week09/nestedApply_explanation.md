`nestedApply` is defined as follows

```haskell
nestedApply fs x = map (<*> x) fs
```

The `(<*>)` (aka _apply_) operator has the following type.

```haskell
(<*>) :: f (a -> b) -> f a -> f b
```

The apply operator takes in a function wrapped in a context, followed by a value wrapped in a context and then returns a transformed value in a context.

In other words, it is like an `fmap` except that the function is also wrapped in a context.


Let's manually evaluate a call of `nestedApply`

```haskell
nestedApply [Just (+1), Just (*2)] (Just 2)
```

We can restate this expression by performing beta reduction.

```haskell
map (<*> (Just 2)) [Just (+1), Just (*2)]
```

Note that `map` can be defined in terms of `foldr`.

```haskell
map f = foldr ((:) . f) []
```

Using this definition of `map`, in the first iteration, this happens

```haskell
(<*> (Just 2)) (Just (*2)) = Just (*2) <*> Just 2 = Just 4
```

This is then added to the accumulator, so it has the value `[Just 4]`.

In the second iteration, this happens

```haskell
(<*> (Just 2)) (Just (+1)) = Just (+1) <*> Just 2 = Just 3
```

This is then added to the accumulator which had a value of `[Just 4]`, therefore it now has the value of `[Just 3, Just 4]`.

Therefore, the result of the evaluation is

```haskell
nestedApply [Just (+1), Just (*2)] (Just 2) = [Just 3, Just 4]
```

What about the following evaluation?

```haskell
nestedApply [Id (++" hello"),Id (++" world!")] (Id "hello")
```

In the first iteration, this happens

```haskell
(<*> (++" hello")) (Id "hello") = Id "hello" ++ Id " hello" = Id "hello hello"
```

This result is added to the accumulator, so it now has the value `[Id "hello hello"]`.

In the second iteration, this happens

```haskell
(<*> (++" world!")) (Id "hello") = Id "hello" ++ Id " world!" = Id "hello world!"
```

This result is added to the accumulator, which had the value `[Id "hello hello"]` so it now has the value `[Id "hello world!", Id "hello hello"]`.

Therefore, a full application gives this result

```haskell
nestedApply [Id (++" hello"),Id (++" world!")] (Id "hello") = [Id "hello world!", Id "hello hello"]
```
