// 1. Multiplication Table Generator

let TableNum = prompt("Enter the number")
TableNum = parseInt(TableNum)

for(let i=1;i<=10;i++){
    console.log(`${i}*${TableNum}=${i*TableNum}`)
}



// 2. Sum of Digits of a Number
let numb = prompt("Enter a positive number:");
numb = parseInt(numb);
let summ = 0;

while (numb > 0) {
    let digit = numb % 10;        
    summ += digit;                
    numb = parseInt(numb / 10);   
}

console.log("Sum of digits:", summ);
