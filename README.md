# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.


/////
fibArray is initialized to [0, 1], and the invariant is true before the first call

The invariant fibArray holds all the Fibonacci numbers

After calculating length - 1 + length - 2

After each recursive call, a new value is added to fibArray

The length of fibArray increases by 1, and fibArray contains the correct Fibonacci numbers n-1, n-2 from index 0 to fibArray.length - 1

Each recursive call uses the last two elements as a new array and maintains the invariant for the next recursion

So the state of fibarray is always correct and the invariant is guaranteed to hold until the next call

Because fibArray is correct, the next valid value will be appended on the correct basis

if (n < fibArray.length)//Contains the correct Fibonacci sequence from 0 to n.




https://cs.stackexchange.com/questions/88145/proving-correctness-of-an-iterative-fibonacci-algorithm
https://math.stackexchange.com/questions/2676262/proof-of-correctness-loop-invariant-for-fibonacci-numbers

Sources: chatgept provide me with ideas for proof methods. And complete the assignment through the examples and theorems on the above website.

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
