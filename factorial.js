//for loop solution
function factorial(n){
 let fact = 1;
 for(let i=1; i<= n; i++){
   fact = fact * i     
 }

  return fact
}
// example:
// console.log(factorial(5)) */
// => 120


function fact(n){
    // when comes into the recursion,
    // the input parameter will read from local scope
    return n <= 1 ? 1 : n * fact(n-1)
}
// example:
// console.log(fact(5))
// => 120
