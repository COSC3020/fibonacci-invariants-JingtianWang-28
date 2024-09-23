function fib(n, fibArray = [0, 1]) {
    
    if (n < fibArray.length) return fibArray;
    fibArray.push(fib(n - 1, fibArray)[n - 1] + fib(n - 2, fibArray)[n - 2]);
    return fibArray;
}
