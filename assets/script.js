// Assignment Code
var generateBtn = document.querySelector("#generate");

// Calls the function to generate a password
function generatePassword() {
 
// Global Variables
var numOfCharacters = getNumOfCharacters();
var lowerCaseLtrs;
var upperCaseLtrs;
var numbers;
var specialCharacters;
var passwordArray = [];

// Variables containing strings of password character types
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var arrLowerCase = lowerCaseString.split("");

var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrUpperCase = upperCaseString.split("");

var numbersString = "0123456789";
var arrNumbers = numbersString.split("");

var specialString = "!@#$%&";
var arrSpecial = specialString.split("");

// Asks the user how many characters should be in the password
function getNumOfCharacters() {
  var userSelection = parseInt(prompt("How many characters would you like your password to contain? (Must be between 8 and 128 characters)"));
  if (userSelection < 8 || userSelection > 128){
    window.alert("You must pick a number between 8 and 128.");
    getNumOfCharacters();
  }
  console.log(userSelection);
  return userSelection;
}

// Asks the user to confirm including lowercase letters in the password
function useLowerCaseLtrs() {
  lowerCaseLtrs = (confirm ("Click 'OK' to confirm including lowercase letters. Click 'Cancel' to proceed, but not include lowercase letters."));
  console.log(lowerCaseLtrs);
}

// Asks the user to confirm including uppercase letters in the password
function useUpperCaseLtrs() {
  upperCaseLtrs = (confirm ("Click 'OK' to confirm including uppercase letters. Click 'Cancel' to proceed, but not include uppercase letters."));
  console.log(upperCaseLtrs);
}

// Asks the user to confirm including numbers in the password
function useNumbers() {
  numbers = (confirm ("Click OK to confirm including numbers. Click 'Cancel' to proceed, but not include numbers."));
  console.log(numbers)
}

// Asks the user to confirm including special characters in the password
function useSpecialCharacters() {
  specialCharacters = (confirm ("Click OK to confirm including special characters. Click 'Cancel' to proceed, but not include special characters."));
  console.log(specialCharacters)
}

// Calls the functions to ask user which character types they want to include  
  useLowerCaseLtrs();
  useUpperCaseLtrs();
  useNumbers();
  useSpecialCharacters();

// Alerts user if at least one character type is not selected, and then asks for character type selections again 
if (!lowerCaseLtrs && !upperCaseLtrs && !numbers && !specialCharacters) {
  alert ("You must pick at least one character type.");
  useLowerCaseLtrs();
  useUpperCaseLtrs();
  useNumbers();
  useSpecialCharacters();
}
  
// Conditional statements for adding user's selections to passwordArray
if (lowerCaseLtrs) {
  passwordArray = passwordArray.concat(arrLowerCase);
}
if (upperCaseLtrs) {
  passwordArray = passwordArray.concat(arrUpperCase);
}
if (numbers) {
  passwordArray = passwordArray.concat(arrNumbers);
}
if (specialCharacters) {
  passwordArray = passwordArray.concat(arrSpecial);
}
  
// Loop for generating a random number that pulls a random character from the passwordArray - the number of times specified in the numOfCharacters variable - which get added to the passwordString

var passwordString = "";

for (var i=0; i < numOfCharacters; i++) {
  passwordString += passwordArray[Math.floor(Math.random() * (passwordArray.length))];
}
    
// End here
  return passwordString;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);