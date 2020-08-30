// Assignment Code
var generateBtn = document.querySelector("#generate");



// RANDOM INT FUNCTION W3SCHOOLS
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generatePassword() {
  //EMTPY PASSWORD
  var pw = "";
  // OBJECT OF CHARACTERS A PASSWORD CAN HAVE
  var characters = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  }
  // PROMPTS ASKING WHAT CONDITIONS THE USER WANTS FOR A PASSWORD
  var passwordLength = prompt("How many characters would you like for your password? Length must have a minimum 8 characters and not to exceed 129 characters.");
  var confirmUpper = confirm("Do you want uppercase letters included in the password?");
  var confirmLower = confirm("Do you want lowercase letters included in the password?");
  var confirmNumbers = confirm("Do you want numbers included in the password?");
  var confirmSpecial = confirm("Do you want special characters included in the password?");

  // CONVERT STRING TO INTEGER
  passwordLength = parseInt(passwordLength);
  
  // CONFIRM CHARACTER TYPE AND PASSWORD LENGTH CONDITIONS
  if ((confirmUpper || confirmLower || confirmNumbers || confirmSpecial) && passwordLength >= 8 && passwordLength <= 129){
    // ARRAY FOR CONFIRMED CHARACTER TYPES
    var charTypes = [];
    if (confirmUpper){
      charTypes.push("upper");
    }
    if (confirmLower){
      charTypes.push("lower");
    }
    if (confirmNumbers){
      charTypes.push("numbers");
    }
    if (confirmSpecial){
      charTypes.push("special");
    }
    
    // FOR LOOP ADDING CHARACTER TO PASSWORD VARIABLE
    for (let i = 0; i < passwordLength; i++){
      var charTypesRand = charTypes[getRndInteger(0, charTypes.length)];
      pw += characters[charTypesRand][getRndInteger(0, characters[charTypesRand].length)]
    }
    // PASSWORD GENERATED
    return pw;
  // VALIDATION OF INPUTS MEET MINIMUM REQUIREMENTS
  } else {
    alert("You must select at least one character type and a length from 8-129.")
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
