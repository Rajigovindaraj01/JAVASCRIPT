// JS1. Write a JavaScript program to display "Hello, JavaScript!" using console.log(). 

console.log("hello,Javascript!")

// JS2. Create a variable using var, let, and const and print their values.

var Fruits = "Apple"
let Toys = "Teddybear"
const Mobile = "oppo"

console.log(Fruits)

console.log(Toys)

console.log(Mobile)

// JS3. Demonstrate the difference between var, let, and const in terms of scope.

 
function scope(){
    var fruitss = "orange"
    let mobiles = "iphone"
    const dress = "tshirt"
    console.log(fruitss)//execute a output because its a functioin scope
    console.log(mobiles)
    console.log(dress)
}
scope();
// console.log(fruitss)

// JS4. Check the type of a variable using typeof for different data types

var name = "Raji";
var number = 123;
var boolean = true;

console.log(typeof name);
console.log(typeof number);
console.log(typeof boolean);
// JS5. Create a user profile object containing name, age, and is Student properties

let Students={
    name:"Raji",
    Age:23,
    Degree:"Mca",
    City:"Thanjavur",
    isStudent:true,
}
console.log(Students)

// JS6.Store and display a list of favorite colors using an array.

let favColours =['pink','blue','yellow','orange'];
console.log("My favourite colours are : " , favColours)

// JS7. Perform type conversion: Convert a string "100" to a number and a number 100 to a string.

let str = "100";
let num =Number(str)
console.log(typeof num)


let numb = 100;
let strin =String(numb);
console.log(typeof strin)

// JS8. Write a function that returns a Boolean value based on a condition. 

function check(){
    var istrue=true;
    return istrue
}
console.log(check())

// JS9. Demonstrate null vs undefined by creating two different variables and checking their types.

let myName = null;
console.log(typeof myName)

let marks;
console.log(marks)

// JS10. Use Symbol data type to create a unique ID and compare two symbols

let a = Symbol(5)
let b= Symbol(5)
console.log(a===b)

// JS11. Use BigInt to store a large number and print its type using typeof.

let bigInt = 1214671526878989009308904930913n;
console.log(bigInt);

console.log(typeof bigInt);

// JS12. Write a function that accepts a number as an argument and returns "Even" or "Odd".

    let even= 2;
    console.log("this is even:" , even)
    let odd =5;
    console.log("this is odd :",odd)

// JS13. Create a temperature conversion program that converts Celsius to Fahrenheit using a variable.

let Celsius = 50;
console.log("fahrenheit=",Celsius * 9/5 + 32)