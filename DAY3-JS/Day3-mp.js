// 1. Simple Login System 

let userName = prompt("Enter your username: ")
let passWord = prompt("Enter your Password: ")

let storedUsername ="raji@2019";
let storedPassword ="12345678"

if(userName === storedUsername && passWord === storedPassword){
    console.log("Login Successfully")
}
else{
    console.log("Invalid Credentials")
}


// 2. Traffic Light System 

let colour = prompt("Enter the colour: ");

if(colour=="Red"){
    console.log("Stop")
}
else if(colour=="Yellow"){
    console.log("Slow Down")
}
else if(colour=="Green"){
    console.log("Go")
}
else{
    console.log("Invalid Colour,Enter a Valid Colour")
}