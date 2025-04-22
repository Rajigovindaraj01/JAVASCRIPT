// JS14. Write a program that calculates the total price of 3 products
let Chocolate = 150;
let IceCream=60;
let Cake = 200;
let total =Chocolate+IceCream+Cake;
console.log("Total is: ",total)

// JS15. Create a script that checks if a number is even or odd using the modulus operator.
let num=15;
let check = (num%2==0)?"even":"odd";
console.log(check)

// JS16. Write a program that increments a number from 1 to 10 using ++
let numb=1;
console.log(numb++)
console.log(numb++)
console.log(numb++)
console.log(numb++)
console.log(numb++)
console.log(numb++)
console.log(numb++)
console.log(numb++)
console.log(numb++)
console.log(numb++)


// JS17. Check if a user is eligible to vote using comparison operators
 let personAge=10;
 let checking=(personAge>=18)?"Eligible to vote":"Not Eligible to Vote";
 console.log(checking)


//  JS18. Write a program to compare two strings using == and ===. 
let person1 = "Raji";
let person2 = "Nisha";
let Check = person1==person2;
console.log(Check)
let strequal = person1===person2;
console.log(strequal)


// JS19. Use && to check if a user has a valid email and password.

let email=true;
let password=false;
let result=(email && password)?"valid":"not Valid"
console.log(result)


// JS20. Write a program to update wallet balance using assignment operators. 

let WalletBalance=5000;
console.log("wallentbalance is:",WalletBalance);

let updatedWalletBalance = 10000;
console.log("updatedBalance is:",updatedWalletBalance)

let checkBalance=(WalletBalance += updatedWalletBalance)
console.log("Total Amount is:",checkBalance)

console.log(WalletBalance)

// JS21. Use a ternary operator to check if a product is available in stock.

let askingproduct=5

let products = 10

let stockCheck =(products>=askingproduct)?"In stock":"stock Out";
console.log(stockCheck)

// JS22. Create a simple "greater than" condition to compare two numbers.

let RamAge =  20;
let vishalage = 25;

let checkage =(vishalage<RamAge)?"Ram is older":"Ram is younger"
console.log(checkage)

// JS23. Write a JavaScript program to apply discounts if a cart total exceeds $50
let carttotal = 40;

let discounts = (50<=carttotal)?"You are eligible for discounts":"Not eligible for discounts";
console.log("discountsEligible:",discounts)

// JS24. Use || to allow login using email or phone number.
let emaill = false;
let phoneNumber = true;

let login=(emaill||phoneNumber)?"Login Succesfully":"Not Login";
console.log("Login Status:",login)

// JS25. Implement a "Buy 1 Get 1 Free" condition using if and &&
let buyproducts = true
let price = 1000

let offer = (buyproducts && (1000<=price))?"Buy 1 Get 1 offer":"No offer";
console.log("offer-status:",offer)


// JS26. Check if a year is a leap year using the modulus operator.
let leapyear = 2025;

let leapcheck =((leapyear % 4 === 0 && leapyear % 100 !== 0) || (leapyear % 400 === 0))?"Its a Leap year":"Not a leap year";
console.log(leapcheck)