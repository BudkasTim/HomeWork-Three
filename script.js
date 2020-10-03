// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetter="abcdefghijklmnopqrstuvwxyz";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var secretWord = "";

  secretWord= secretWord+genUpperLetters();

  return secretWord;
}


function genUpperLetters (){
  // for (var i =0; i<upperLetters.length; i++ )
  return  upperLetters[Math.floor(Math.random()*Math.floor(upperLetters.length))];
        
}

