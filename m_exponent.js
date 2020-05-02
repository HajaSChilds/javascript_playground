//To the power of (2,3)
//reduce




function manualExponent(number, exponent){
//TODO: Create an array using a loop
    let arr1 = [];  
    for (i = 0;i < exponent; i++){
        arr1.push(number);
    }
//TODO: Use reducer function
    balance = arr1.reduce((acc, current) => acc * current, 1);
    
//TODO: Return final value    
    return balance;
}

console.log(manualExponent(3,3))