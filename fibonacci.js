// This will print the Fibonacci series
// until the length of the sequence be equal to the input
function fibonacciTerms(n){
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

// This will print the Fibonacci numbers series
// until the last one be less or equal to the input
function fibonacciCertain(n){
    let n1 = 0, n2 = 1, nextTerm;
    nextTerm = n1 + n2;
    console.log(n1)
    console.log(n2)
    while (nextTerm <= n) {
        console.log(nextTerm)
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

// example:
// fibonacciTerms(5)
// => 0,1,1,2,3
// fibonacciCertain(5)
// => 0,1,1,2,3,5
