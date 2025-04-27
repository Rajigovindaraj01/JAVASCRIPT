// JS53. Create a function that prints "Hello, World!".

function greet(){
    console.log("Hello World!")
}
greet()


// JS54. Write a function that takes a number and returns its cube. 

function returnCube(numberr){
    let cube = numberr*numberr*numberr;
    console.log(cube);
    return cube;
}
returnCube(2)

// JS55. Write a function to check if a number is even or odd.

function oddorEven(){
    let number = prompt("Enter a Number");
    let numbers = parseInt(number)
    if(numbers%2===0){
        console.log(`${numbers} is even`)
    }
    else{
        console.log(`${numbers} is odd`)
    }
}
oddorEven()


// JS56. Write a function to find the factorial of a number.

function factorial(){
    let factNum=prompt("Enter a Number");
    let factorialnum=parseFloat(factNum);
    let fact=1;
    for(let i=factorialnum;i>=1;i--){
        fact=fact*i;
    }
    console.log(fact)
    return fact
}
factorial()


// JS57. Create a function to return the sum of two numbers.
function sumTwoNum(Num1,Num2){
    let Sum = Num1+Num2;
    console.log(`Sum of Two Numbers are:${Sum}`)
    return Sum
}
sumTwoNum(10,20)


// JS58. Write a function that returns the largest of three numbers. 
function findLargest(N1, N2, N3) {
    if (N1 < N2 && N2 > N3) {
        return N2;
    } else if (N3 > N1 && N3 > N2) {
        return N3;
    } else {
        return N1;
    }
}

let largest = findLargest(10, 50, 20);
console.log(`The largest is ${largest}`);

// JS59. Write a function that checks if a string is a palindrome

function palindrome(strng){
    let start =0
    let end = strng.length-1;

    while(start<end){
    if(strng[start]!== strng[end]){
            console.log("This is not a palindrome")
            return false
        }
        start++
        end--
    }
    console.log("This is palindrome")
    return true
}
palindrome("madamn")


// JS60. Create a function to convert Celsius to Fahrenheit. 
function celtofahren(Celsius){
    let Fahrenheit = (Celsius*9/5)+32;
    console.log(`${Celsius}c is ${Fahrenheit}f`)
    return Fahrenheit
}
celtofahren(10)


// JS61. Write a function to calculate the simple interest.
function simpleInterest(principal,rate,time){
    let interest = (principal * rate * time) / 100;
    console.log(interest)
    return interest;
}
simpleInterest(1000,10,50)


// JS62. Create a function that reverses an array

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr[arr.length - 1 - i] = arr[i];
    }
    return reversedArr; 
}

let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));

// JS63. Write a function that counts the number of vowels in a string. 
function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;  

            }
        }
    } 
    console.log(count)
    return count;
}
countVowels(("strawberry"))

// JS64. Write an arrow function that doubles each number in an array. 
const doubleNumbers = (arr) => {
    let doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArr[i] = arr[i] * 2;  
    }
    console.log(doubledArr)
    return doubledArr;
};
doubleNumbers([1, 2, 3, 4, 5])

// JS65. Create a function that takes a callback and calls it

function call(calledfunc){
    calledfunc()
}
function hello(){
    console.log("hi")
}
call(hello)