var   Length = 10;

var   CharOptionsArr = [];

// Array of special characters to be included in password
var   specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var   numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var   lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];


// Array of uppercase characters to be included in password
var   upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password CharOptionsArr
function getPasswordOptions(){
    CharOptionsArr= []; //resets choiceArr
    Length = parseInt(prompt("Enter the number of characters for your password. (10 - 64 characters)"));
    if (isNaN(Length)|| Length < 10 || Length > 64){
      alert("Enter a number, 10 - 64. Please try again");
      return false; 
    }
    if (confirm("would you like special character in your password?")){
      CharOptionsArr = CharOptionsArr.concat(specialCharacters);
    }
    if (confirm("would you like numbers?")){
      CharOptionsArr = CharOptionsArr.concat(numericCharacters);
    }
    if (confirm("would you like lower case letters?")){
      CharOptionsArr = CharOptionsArr.concat(lowerCasedCharacters);
    }
    if (confirm("would you like upper case letters?")){
      CharOptionsArr = CharOptionsArr.concat(upperCasedCharacters);
    }
    return true;
  }


    // Function for getting a random element from an array
    
  function getRandom(arr) {
    var password = "";
    for (var i = 1; i < Length; i++){
        var randomindex = Math.floor(Math.random() * CharOptionsArr.length);
        password += CharOptionsArr=[randomindex];
  }
  return password;

}

  // Function to generate password with user input
  function generatePassword() {
    var password = "";
    for (var i = 1; i < Length; i++){
        var randomindex = Math.floor(Math.random() * CharOptionsArr.length);
        password += CharOptionsArr[randomindex];

    }  
    return password
  
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var possiblePassword = getPasswordOptions();

  if (possiblePassword){
    var password = generatePassword();
  var passwordText = document.querySelector('#password');
  }
  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);