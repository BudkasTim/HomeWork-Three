// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters="abcdefghijklmnopqrstuvwxyz";
var numberVars="1234567890";
var specialVars="~!@#$%^&*()_+";

function generatePassword(){
  // asking user what to unclude in the password
  var secretWordLength= parseInt(prompt( "Plz, Choose the length of ur password. make it between 8-128 characters."));
  //4 debugging purposes logging length of password  
  console.log(secretWordLength);
  // fail safe for a valid nunber entry
    if (Number.isInteger(secretWordLength)==false){
      alert( "plz, enter a valid number");
      return generatePassword();
    }
// second fail check a valid character length
    if (secretWordLength>128||secretWordLength<8 ){
      alert( "plz, use advised length for the password ");
      return generatePassword();
      
    }
  // declaring variables for this program
  isUppercase= confirm("Do u want 2 include Upper case letter?");
  isLowercase= confirm("Do u want 2 include Lower case letter?");
  isRandomNumbers= confirm("Do u want 2 include Random Numbers ?");
  isSpecialSymbols= confirm("Do u want 2 include Special Symbols?");
 

          var secretWord = "";
          for(var i=0; i<secretWordLength; i++){
              if (isUppercase==true ){
                secretWord= secretWord+genUpperLetters();
              
                 }
              if (isLowercase==true ){
                secretWord= secretWord+genLowerLetters();
                
                 }
              if (isRandomNumbers==true ){
                secretWord= secretWord+genRandomNumbers();

                  }
                if (isSpecialSymbols==true ){
                secretWord= secretWord+genRandomSymbols();

               }
          
            //secretWord= secretWord+secretWord[Math.floor(Math.random()*secretWord.length)];

       }
        // var secretWord gets longer if I dont use substr method.
        return secretWord.substr(0,secretWordLength);
      }


    // a function generates random Upper letters
          function genUpperLetters (){
                var random=upperLetters[Math.floor(Math.random()*upperLetters.length)];
                 return random;
                }
    // a function generates random lower letters
         function genLowerLetters (){
                    var random=lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
                return random;
               }
    // a function generates random numbers
          function genRandomNumbers (){
                    var random=numberVars[Math.floor(Math.random()*numberVars.length)];
                return random;
                }
    // a function generates random special symbols
          function genRandomSymbols (){
                    var random=specialVars[Math.floor(Math.random()*specialVars.length)];
                return random;
              }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
