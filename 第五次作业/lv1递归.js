let res; 
function factorial(n){
    if((n == 0) || (n == 1)){
       res = 1;
    } else {
        res = n*factorial(n-1);
    }
    return res;
}
console.log(factorial(10));