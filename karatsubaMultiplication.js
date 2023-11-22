function karastubaMultiplication(num1,num2){
    if(num1 || num2 ){
        return num1*num2
    }
const str1= String(num1)
// console.log("The 1st number is: "+str1)
const str2= String(num2)
// console.log("The 2nd number is: "+str2)
const maxLength= Math.max(str1.length,str2.length)
// console.log(maxLength)
const paddedStr1 = str1.padStart(maxLength, '0');
// console.log("The padded 1st string is: "+paddedStr1)
const paddedStr2 = str2.padStart(maxLength, '0');
// console.log("The padded 2nd string is: "+paddedStr2)
const halfLength= Math.ciel(maxLength/2)
const high1=Number((paddedStr1.slice(0,halfLength)))
const low1=Number((paddedStr1.slice(halfLength)))    
const high2=Number((paddedStr2.slice(0,halfLength)))
const low2=Number((paddedStr2.slice(halfLength)))    
const highProduct = karatsubaMultiply(high1, high2);
const lowProduct = karatsubaMultiply(low1, low2);
const sumProduct = karatsubaMultiply(high1 + low1, high2 + low2); 
const midProduct = sumProduct - lowProduct - highProduct;
const highProductStr = String(highProduct) + '0'.repeat(2 * (maxLength - halfLength));
const midProductStr = String(midProduct) + '0'.repeat(halfLength);
const result = Number(highProductStr) + Number(midProductStr) + lowProduct;
return result;
}
const a =karastubaMultiplication(1234,5678)
console.log(a)
// The Karatsuba Algorithm
// Let’s consider two 4-digit numbers x and y where x=1234 and y=5678. First of all, we should divide the n-digit numbers into n/2-digit numbers as shown below.


// a and c represent the first n/2 digits of x and y. Similarly, b and d represent the last n/2 digits of x and y

// The Karatsuba algorithm involves 4 main steps.


// Finally, multiply the output of step 1 by 10ⁿ, the output of step 4 by 10^(n/2), and add them both with the output of step 2 (as shown below).


// If you multiply 1234 and 5678, the answer would be 7006652. Seems pretty easy right!!!

