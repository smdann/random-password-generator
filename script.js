// Assignment Code
var generateBtn = document.querySelector("#generate");

// start here

// Global Variables
var numOfCharacters;
var lowerCaseLtrs;
var upperCaseLtrs;
var numbers;
var specialCharacters;


// Variables containing strings of password character types
var onlyLowerCase = "abcdefghijklmnopqrstuvwxyz";
var onlyUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var onlyNumbers = "0123456789";
var onlySpecial = "!@#$%&";
var lowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var lowerNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
var lowerSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%&";
var lowerUpperNumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789";
var lowerUpperSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY!@#$%&";
var upperNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var upperSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&";
var upperNumbersSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
var numbersSpecial = "0123456789!@#$%&";
var lowerUpperNumbersSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789!@#$%&";




// Ask the user how many characters should be in the password
function howManyCharacters() {
  numOfCharacters = parseInt(prompt("How many characters would you like your password to contain? (Must be between 8 and 128 characters)"));
  console.log(numOfCharacters)
  // If a number between 8 and 128 is entered by user, 
}

// Ask the user if they would like lowercase letters to be included
function useLowerCaseLtrs() {
  lowerCaseLtrs = (confirm ("Do you want to include lowercase characters?"));
}

// Ask the user if they would like uppercase letter to be included
function useUpperCaseLtrs() {
  upperCaseLtrs = (confirm ("Do you want to include uppercase characters?"));
}

// Ask the user if they would like numbers to be included
function useNumbers() {
  numbers = (confirm ("Do you want to include numeric characters?"));
}

// Ask the user if they would like special characters to be included
function useSpecialCharacters() {
  specialCharacters = (confirm ("Do you want to include special characters?"));
}





// Calls the functions
function generatePassword() {
  // console.log("start here");
  howManyCharacters();
  useLowerCaseLtrs();
  useUpperCaseLtrs();
  useNumbers();
  useSpecialCharacters();



// end here

  return "finalpassword"
}


// var students = ["Fred", "Wilma", "Barney", "Betty"];
//  var min =  ;
//  var max =  ;
//  var longStringOfStudents = "";
//  var random = Math.floor(Math.random() * (max - min + 1) + min);
//  longStringOfStudents += students[random];
//  console.log(longStringOfStudents)

// console.log(lowerCaseLtrs[3])

// var joined = lowerCaseLtrs.concat(upperCaseLtrs);

// console.log(joined)


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