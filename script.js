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
// var password; (password output)

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

// Function used for numbers for the password
function determineNumbers(){
  numberRange = prompt("Does your password include numbers? \nYes or No");

  if (numberRange === null){
    determineLength();
  } else if (numberRange === "yes"){
    numberRange = true;
    return numberRange;
  } else if (numberRange === "no"){
    numberRange = false;
    return numberRange;
  } else {
    alert("Pick Yes or No");
    determineNumbers();
  }
  return numberRange;
}

// Function used for special characters for the password
function determineSpecial(){
  specialChar = prompt("Does your password include special characters? \nYes or No");

  if (specialChar === null){
    determineLength();
  } else if (specialChar === "yes"){
    specialChar = true;
    return specialChar;
  } else if (specialChar === "no"){
    specialChar = false;
    return specialChar;
  } else {
    alert("Pick Yes or No");
    determineSpecial();
  }
  return specialChar;
}

// Function used to take all the data from functions and create a password off the answers
function generatePassword(){
  determineLength();
  determineLowcase();
  determineUpcase();
  determineNumbers();
  determineSpecial();

  var output = "";
  password = "";

  if (lowcaseChar && upcaseChar && numberRange && specialChar){
    output += lowcase + upcase + number + special;

  } else if (lowcaseChar && upcaseChar && numberRange){
    out += lowcase + upcase + number;

  } else if (lowcaseChar && specialChar && numberRange){
    output += lowcase + special + number;

  } else if (upcaseChar && specialChar && numberRange){
    output += upcase + special + number;

  } else if (lowcaseChar && upcaseChar){
    output += lowcase + upcase;

  } else if (lowcaseChar && numberRange){
    output += lowcase + number;

  } else if (lowcaseChar && specialChar){
    output += lowcase + special;

  } else if (upcaseChar && numberRange){
    output += upcase + number;

  } else if (upcaseChar && specialChar){
    output += upcase + special;

  } else if (numberRange && specialChar){
    output += number + special;

  } else if (lowcaseChar){
    output += lowcase;

  } else if (upcaseChar){
    output += upcase;

  } else if (numberRange){
    output += number;

  } else if (specialChar){
    output += special;

  } else {
    output === null;
    alert ("Say 'Yes' to one to make password");
    determineLength();
  }
  // charAt function used to create password
  for(var i= 0; i < passwordLength; i++){
    password += output.charAt(Math.floor(Math.random() * output.length))
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
