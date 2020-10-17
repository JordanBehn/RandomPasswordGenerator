// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "1234567890";
var specialChars = "!\"#$%&\'()*+,-.\\/:;<=>?@[]^_`{|}~";
console.log(specialChars)

// Write password to the #password input

function writePassword() {
    var charPool = "";
    var len = Math.floor(Number(prompt("How many characters long would you like your password to be? (must be at least 8)")));
    if (isNaN(len) || len > 128 || len < 8) {
        alert("Password length must be a number between 8 and 128");
        return
    }

    if (confirm("Include lower case letters?")) {
        alert("Your password will include lowercase letters");
        charPool = charPool + lowerLetters;
    } else { alert("Your password will not include lowercase letters") }
    if (confirm("Include uppercase letters?")) {
        alert("Your password will include uppercase letters")
        charPool = charPool + upperLetters;
    } else { alert("Your password will not include uppercase letters") }
    if (confirm("Include numbers")) {
        alert("Your password will include numbers")
        charPool = charPool + numberChars;
    } else { alert("Your password will not include numbers") }
    if (confirm("Include special characters?")) {
        alert("Your password will include special characters")
        charPool = charPool + specialChars;
    } else { alert("Your password will not include special characters") }

    console.log(charPool);

    // var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);