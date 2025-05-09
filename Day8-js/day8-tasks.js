// JS92. Convert "javascript" to uppercase. 

let sample = "javascript";
console.log(sample.toUpperCase(sample))


// JS93. Convert "HELLO WORLD" to lowercase.
let sample2 = "HELLO WORLD";
console.log(sample2.toLowerCase(sample2))

// JS94. Extract "Script" from "JavaScript" using slice(). 
let sample3 = "JavaScript";
console.log(sample3.slice(4,10))

// JS95. Replace "bad" with "good" in "This is a bad day".
let day = "This is a bad day";
console.log(day)
console.log(day.replace("bad","good"))

// JS96. Check if "Coding" is present in "I love Coding!". 
let check = "I Love Coding";
console.log(check.includes("Coding"))

// JS97. Find the position of "world" in "Hello world!". 
let find = "Hello World!"
console.log(find.indexOf("World"))


// JS98. Remove spaces from " Trim me ".
let remove = " Trim me ";
console.log(remove)
console.log(remove.trim())

// JS99. Count the number of characters in "Programming". 
let word = "Programming";
console.log(word.length)


// JS100. Check if "apple" starts with "a"
let checks = "apple";
console.log(checks.startsWith("a"))


// JS101. Split "banana,apple,orange" into an array. 
let fruits = "banana, apple, orange";
console.log(fruits.split())


// JS102. Repeat "JS " three times.
let text = "JS"
console.log(text.repeat(3))


// JS103. Concatenate "Web" and " Development". 
let word1 = "Web";
let word2 ="Development";
console.log(word1.concat(word2))


// JS105. Validate if "user123" has at least 5 characters.
function validate(user){
    if(user.length>5){
        return "valid Username"
    }
    else{
        return "Enter a Valid username"
    }
}
console.log(validate("rajiii"))