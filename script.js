// Assignment Code
var generateBtn = document.querySelector("#generate");

// Calls the function
function generatePassword() {
 
// Global Variables
var numOfCharacters = getNumOfCharacters();
var lowerCaseLtrs;
var upperCaseLtrs;
var numbers;
var specialCharacters;
var passwordArray = [];



// Variables containing strings of password character types
var onlyLowerCase = "abcdefghijklmnopqrstuvwxyz";
var arrOnlyLowerCase = onlyLowerCase.split("");
console.log(arrOnlyLowerCase);

var onlyUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrOnlyUpperCase = onlyUpperCase.split("");

var onlyNumbers = "0123456789";
var arrOnlyNumbers = onlyNumbers.split("");

var onlySpecial = "!@#$%&";
var arrOnlySpecial = onlySpecial.split("");

var lowerUpperNumbersSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789!@#$%&";
var arrLowerUpperNumbersSpecial = lowerUpperNumbersSpecial.split("");



// Ask the user how many characters should be in the password
function howManyCharacters() {
  numOfCharacters = parseInt(prompt("How many characters would you like your password to contain? (Must be between 8 and 128 characters)"));
  console.log(numOfCharacters);
}

// Ask the user if they would like lowercase letters to be included
function useLowerCaseLtrs() {
  lowerCaseLtrs = (confirm ("Do you want to include lowercase characters?"));
  console.log(lowerCaseLtrs);
}

// Ask the user if they would like uppercase letter to be included
function useUpperCaseLtrs() {
  upperCaseLtrs = (confirm ("Do you want to include uppercase characters?"));
  console.log(upperCaseLtrs);
}

// Ask the user if they would like numbers to be included
function useNumbers() {
  numbers = (confirm ("Do you want to include numeric characters?"));
  console.log(numbers)
}

// Ask the user if they would like special characters to be included
function useSpecialCharacters() {
  specialCharacters = (confirm ("Do you want to include special characters?"));
  console.log(specialCharacters)
}


  howManyCharacters();
  useLowerCaseLtrs();
  useUpperCaseLtrs();
  useNumbers();
  useSpecialCharacters();
  
  

// Conditional statement for generating appropriate password based on user's selections

  // add loop for generating random number x amount of times that pulls from appropriate variable string

  
    




// End here
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