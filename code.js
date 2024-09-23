function fib(n, fibArray = [0, 1]) {

    if (n < fibArray.length) return fibArray.slice(0, n + 1);
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fib(n, fibArray);
}
