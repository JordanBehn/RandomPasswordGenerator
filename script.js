// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



function writePassword() {
    var len = Math.floor(Number(prompt("How many characters long would you like your password to be? (must be at least 8)")));
    var lower = confirm("Include lower case letters?");
    var upper = confirm("Include upper case letters?");
    var nums = confirm("Include numbers");
    var specials = confirm("Include special characters?");
    //if (isNaN) {}

    console.log(typeof(len))
    console.log(len)


    // var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);