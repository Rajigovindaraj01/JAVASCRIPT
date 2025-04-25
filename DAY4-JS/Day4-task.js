// JS40. Print numbers from 1 to 10 using a for loop

    
for( let i=1;i<=10;i++){
    console.log(i)
}

// JS41. Print even numbers from 2 to 20 using a for loop.

for(let i=1;i<=20;i++){
    if(i%2===0){
        console.log("Even Numbers are", i)
    }
}


// JS42. Print numbers from 10 to 1 using a while loop.

let num = 10;
while(num>0){
    console.log(num);
    num--;
}


// JS43. Print "Hello World!" 5 times using a do-while loop.

let count = 1;
let greet = "Hello world";

do {
    console.log(greet);
    count++;
} while (count <= 5);

// JS44. Iterate over an array and print each element using a for...of loop. 

let fruits = ["apple","Orange","mango","Guava","Pineapple"];
for(let fruit of fruits){
    console.log(fruit)
}

// JS45. Iterate over an object and print its properties using a for...in loop. 

let students ={
    name : "Raji",
    Age:23,
    city:"Thanjavur",
    Degree:"MCA"
}
for(let stu in students){
    console.log(stu+":",students[stu])
}

// JS46. Sum numbers from 1 to 10 using a for loop.

let sum=0;

for(let i =1;i<=10;i++){
    sum += i;
}
console.log("The sum of 10 numbers is:"+sum)

// JS47. Find the first number greater than 50 in an array using break. 

let numbr = [20,10,50,52,63,60];

let firstGreaterNum = null;

for(let i=0; i<numbr.length;i++){
    if(numbr[i]>50){
        firstGreaterNum = numbr[i];
        break
    }
}
console.log(`"The first Greater number in:${numbr} is:",${firstGreaterNum}`)


// JS48. Skip printing numbers divisible by 3 using continue.

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue; 
    }
    console.log(i);
}

// JS49. Create a multiplication table for 5 using a for loop.

let numberr = 5;
for(let i = 1;i<=10;i++){
    console.log(`${i}*${numberr}=${i*numberr}`)
}


// JS50. Reverse a string using a loop.

let strin = "Strawberry";
let reversed = "";

for (let i = strin.length - 1; i >= 0; i--) {
    reversed += strin[i];
}

console.log("Reversed string:", reversed);




// JS51. Count the number of vowels in a string using a loop. 

let str = "Strawberry";
let vowelCount = 0;

for (let char of str) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || 
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        vowelCount++;
    }
}

console.log("Number of vowels:", vowelCount);

// JS52. Find the largest number in an array using a loop.
let numbrs = [20,10,50,52,63,60];

let largestNum = null;

for(let i=0; i<numbr.length;i++){
    if(numbrs[i]>0){
        largestNum= numbrs[i];
    }
}
console.log(`"The first Greater number in:${numbrs} is":${largestNum}`)