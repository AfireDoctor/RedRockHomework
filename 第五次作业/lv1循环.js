let res=1;
function factorial(n){
    if(n>0){
        for(let i=n;i>0;i--){
            res=res*i;
        }
    }
    return res;
}
console.log(factorial(10));