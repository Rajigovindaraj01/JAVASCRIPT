// 1. Username Generator


function UsernameGenerate(firstname,lastname){
    let firstpart = firstname.slice(0,3);
    let lastpart = lastname.slice(0,3);

    let randomNumber = (firstname.length+lastname.length)%900+100;

    let username = firstpart+lastpart+randomNumber;

    return username
}
console.log(UsernameGenerate("raji","raji"))


// 2. Palindrome Checker (Real-World Mini Project)
function checkPalindrome(str) {
    let cleaned = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toUpperCase();
        if ((char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }

    let reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}
checkPalindrome("Madamm");
