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

// Function used to determine length of password
function determineLength(){
  passwordLength = prompt("Determine how many characters you want in your password - Between 8-128 characters");

  if (passwordLength<8){
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else if (passwordLength>128){
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else {
    alert("You will be asked to used specific characters to create your password. Press 'Ok' when completed");
  }
  return passwordLength;


}












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
