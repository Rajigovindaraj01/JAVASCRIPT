// JS27. Write an if condition to check if a number is positive. 

let number = 2;
if(number>0){
    console.log("Its a positive");
}

// JS28. Use if-else to check if a person is an adult.

let personAge = 20;

if(personAge>18){
    console.log("you are a adult because you are",personAge,"now");   
}
else{
    console.log("you are not a adult because you are",personAge,"now");
}

// JS29. Check if a number is even or odd using if-else.

let numbrr = 30;

if(numbrr%2==0){
    console.log("Its a even because it is",numbrr);
}
else{
    console.log("Its a odd because it is",numbrr);
}

// JS30. Use if-else if-else to check grade categories.

let mark=45;

if(mark>=90 && mark<=100){
    console.log("Grade A because mark is",mark)
}
else if(mark>=80 && mark<90){
    console.log("Grade B because mark is",mark)
}
else if(mark>=70 && mark<80){
    console.log("Grade C because mark is",mark)
}
else if(mark>=50 && mark<70){
    console.log("Grade D because mark is",mark)
}
else if(mark>=35 && mark<50){
    console.log("Grade E because mark is",mark)
}
else{
    console.log("Fail")
}


// JS31. Check if a person is eligible for a driver's license.
 let age = 25;

 if(age>=18){
    console.log("You are eligible for driver license because you are",age)
 }
 else{
    console.log("You are not eligible for driver license because you are",age)
 }


//  JS32. Create a nested if condition to check both login and admin status. 

let isLoggedin = true;
let user = "admin";

if(isLoggedin){
    if(user==="admin"){
        console.log("Welcome Admin")
    }
    else{
        console.log("Others")
    }
}
else{
    console.log("Please login")
}


// JS33. Use a switch statement to print messages for different days

let day = "Sunday";

switch(day){
    case "Monday":
        console.log("Marvellous Monday");
        break;
    case "Tuesday":
        console.log("Tremendous Tuesday");
        break;
    case "Wednesday":
        console.log("Wonderful Wednesday");
        break;
    case "Thursday":
        console.log("Truthful Thursday");
        break;
    case "Friday":
        console.log("fabulous Friday");
        break;
    case "Saturday":
        console.log("Successful Sunday")
        break;
    case "Sunday":
        console.log("Smileful Sunday, Enjoy")
        break;
    default:
        console.log("Invalid")
}

// JS34. Use a ternary operator to check if a person is eligible for a senior citizen discount.

let seniorCitizenAge = 65;

let check =(seniorCitizenAge>=60)?"You are eligible for senior citizen discount":"You are not eligible for senior citizen discount";
console.log(check)


// JS35. Check if a user is logged in using &&.
let islogin = true;
let userr = "user";

if(islogin && userr==="user"){
    console.log("user is loggined")
}
else{
    console.log(" user Login please")
}


// JS36. Use || to check if a username or email is provided. 

let email = "";
let username = "raji";

if(email !=" " || username !=" "){
    console.log(email,username,"provided")
}
else{
    console.log("nothing Provided")
}


// JS37. Use ! to negate a boolean variable.

let isLogin = true;

if(!isLogin){
    console.log("user is not login")
}
else{
    console.log("user is login")
}


// JS38. Check if the current year is a leap year.

let year = 2025;

if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}


// JS39. Validate a password length using an if statement.
let password ="raji1223"

if(password.length>=8){
    console.log("Valid Password")
}
else{
    console.log("Please enter a Valid Password")
}