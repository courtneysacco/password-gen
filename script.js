var generateBtn = document.querySelector("#generate");
var lowcase = "abcdefghijklmnopqrstuvwxyz";
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()-_=+[]{}|/';:?.,<>`~";
// var passLength;
// var lowcaseChar;
// var upcaseChar;
// var numberRange;
// var specialChar;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
