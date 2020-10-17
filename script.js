// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["abcdefghijklmnopqrstuvwxyz"]
var upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ "]
var numberChars = ["1234567890"]
var specialChars = ["!\"#$%&\'()*+,-.\\/:;<=>?@[]^_`{|}~"]
console.log(specialChars)

// Write password to the #password input

function writePassword() {
    var charPool = []
    var len = Math.floor(Number(prompt("How many characters long would you like your password to be? (must be at least 8)")));
    if (isNaN(len) || len > 128 || len < 8) {
        alert("Password length must be a number between 8 and 128")
        return
    }

    var lower = confirm("Include lower case letters?");
    var upper = confirm("Include upper case letters?");
    var nums = confirm("Include numbers");
    var specials = confirm("Include special characters?");

    consol.log(charPool)

    // var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);