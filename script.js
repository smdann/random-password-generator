// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var numOfCharacters;
var lowerCaseLtrs;
var upperCaseLtrs;
var numbers;
var specialCharacters;

// Ask the user how many characters should be in the password
function howManyCharacters() {
  numOfCharacters = parseInt (prompt("How many characters would you like your password to be?"));
}

// Ask the user if they would like lowercase letters to be included
function useLowerCaseLtrs() {
  lowerCaseLtrs = (confirm ("Do you want lowercase letters in the password?"));
}

// Ask the user if they would like uppercase letter to be included
function useUpperCaseLtrs() {
  upperCaseLtrs = (confirm ("Do you want uppercase letters in the password?"));
}

// Ask the user if they would like numbers to be included
function useNumbers() {
  numbers = (confirm ("Do you want numbers in the password?"));
}

// Ask the user if they would like special characters to be included
function useSpecialCharacters() {
  specialCharacters = (confirm ("Do you want special characters in the password?"));
}

// Calls the functions
function generatePassword() {
  // console.log("start here");
  howManyCharacters();
  useLowerCaseLtrs();
  useUpperCaseLtrs();
  useNumbers();
  useSpecialCharacters();



  return "finalpassword"
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria



// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



/*
  Loop:  I want to do something x number of times
  Function:  I want to do something on-demand, and probably more than once at different places in the code
*/