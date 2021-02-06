function fact(n){
    // when comes into the recursion,
    // the input parameter will read from local scope
    return n <= 1 ? 1 : n * fact(n-1)
}
// example:
// console.log(fact(5))
// => 120