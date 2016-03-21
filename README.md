# Building iterators

## Getting started

1. Fork & clone this repo.
2. Start at `myEach.js`. There is already some starter code there; begin by filling in the function body.
3. Use the included test suite to help you test your solutions (See the section on Tests below).

## Build your own iterator!

#### Implementation Tips

For the following challenges it is essential that you understand the requirements to fully implement the built-in array method. See [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Before you start each problem, ask yourself questions such as:

* What are our inputs?
* What is our output?
* What happens on each loop?
* What does the callback function do?
* What gets passed into our callback function? i.e. what arguments does it receive? (it's inputs)
  * Where does it come from?
  * How do we know what to name it?

You should be able to answer most of these questions based on the documentation you just read or by experimenting in the browser developer tools.

#### Goal
1. Create a function `myEach` which implements `Array.prototype.forEach`
2. Create a function `myMap` which implements `Array.prototype.map`
3. Create a function `myReduce` which implements `Array.prototype.reduce`
    - Note: `reduce` behaves a little bit different than the other iterators (see [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)). For `myReduce` we recommend you not worry about `initialValue` at first. You can always add it in later.

> **Pro-Tip**: It's easier to build incrementally than to try to do everything all at once. Remember to start small and add features later.

**Bonuses**:

* Create a function `myFilter` which implements `Array.prototype.filter`
* Create a function `mySome` which implements `Array.prototype.some`
* Create a function `myEvery` which implements `Array.prototype.every`


## Using Tests

For each problem (`problems.forEach`!), you can run the provided tests to check your work and confirm your solution.

To setup the tests, please follow these instructions:
* `cd` into the `building_js_interators_lab` directory.
* Run `npm install`.  (You should *not* be in the `test` directory).
    - This installs the dependencies and testing framework we need.

### Running the tests

To run the tests for `myMap`, in your terminal, type:

```bash
mocha test/test-myMap.js
```

This will test the `myMap` function you wrote in `myMap.js`.

You can do the same thing for the other iterators as well:

```bash
mocha test/test-myEach.js
mocha test/test-myReduce.js
```

> **Pro-Tip**: Let the tests call your function for you. You should not be calling, e.g. `myMap` in your code directly.

#### Sample output:

GREEN (✓) - test has passed. Nice work!
RED - test has failed. Keep working!

For example, here is some test output with three passing (✓) tests:

```
$ mocha test/test-myMap.js


 myMap
   1) takes and calls a callback function
      results:  []
   2) passes each item in the array to the callback
      results:  []
   3) passes each index in the array to the callback
   ✓ passes the entire array to the callback
      results:  undefined
   4) returns an array
      results:  undefined
   5) returns an array with the same number of elements
      results:  undefined
   6) returns an array constructed from the return values of the callback
      results:  [ 'a', 'b', 'c', 'd' ]
   ✓ doesn't alter the original array
      results:  []
   ✓ works with arrays of length 0
      results:  []
   7) works with arrays of length 1
```

> **Note**: Sometimes tests pass right away. This is called a "false positive". As you start writing code, some of your prematurely "green" tests will turn "red"!

Here's an example of a failure messages (pay close attention to these, they give you hints!):

```
7) myMap works with arrays of length 1:

  AssertionError: expected 0 to equal 1
  + expected - actual

  +1
  -0

  at Context.testArrayL1 (test/test-myMap.js:115:38)
```

An **assertion** is a statement that *asserts* or says this "MUST BE TRUE".  If
the statement turns out to be false, then the assertion fails and the test fails.  

In the above output we can see that the assertion in `test/test-myMap.js:115:38` (at line 115, and at character 38) expected `0` (the "actual" result) to equal `1` (the "expected" result).

Here's another one:

```
2) myMap passes each item in the array to the callback:
   AssertionError: expected [] to have the same members as [ 'a', 'b', 'c', 'd' ]
    at Context.testEachItem (test/test-myMap.js:37:36)
```

*What do you think this means?*

At line 37 in the test file there was an expectation that an array would have the elements `['a', 'b', 'c', 'd']`.  But instead it got an empty array!


### Another way to test/use your code

You should not be calling your functions directly. For example, you should not call `myMap` inside `myMap.js`.

If you want to test your code manually, we recommend you write all of your "driver code" inside of `index.js`.

To run it on the console, type: `node index.js`

Here's what your driver code might look like:

``` javascript
//index.js
var input = ["a","b","c"];
var output = myMap(input, function(v){
    return v.toUpperCase();
};
console.log('Testing myMap')
console.log(output === ["A", "B", "C"]) // assertion
```

> **Note**: All your iterator function are available to you in this file! That's what `require` is doing.
