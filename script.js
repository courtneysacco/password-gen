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

// Function used for lowcase letters for the password
function determineLowcase(){
  lowcaseChar = prompt("Does your password include lowercase letters? \nYes or No");

  if (lowcaseChar === null){
    determineLength();
  } else if (lowcaseChar === "yes"){
    lowcaseChar = true;
    return lowcaseChar;
  } else if (lowcaseChar === "no"){
    lowcaseChar = false;
    return lowcaseChar;
  } else {
    alert("Pick Yes or No");
    determineLowcase();
  }
  return lowcaseChar;
}

// Function used for upcase letters for the password
function determineUpcase(){
  upcaseChar = prompt("Does your password include uppercase letters? \nYes or No");

  if (upcaseChar === null){
    determineLength();
  } else if (upcaseChar === "yes"){
    upcaseChar = true;
    return upcaseChar;
  } else if (upcaseChar === "no"){
    upcaseChar = false;
    return upcaseChar;
  } else {
    alert("Pick Yes or No");
    determineUpcase();
  }
  return upcaseChar;
}












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
