// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var len = Math.floor(Number(prompt("How long?")));
    //if (isNaN) {}

    console.log(typeof(len))
    console.log(len)


    // var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);