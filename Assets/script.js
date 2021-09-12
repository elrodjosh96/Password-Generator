// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var specialChars = "!@#$%^&*()"
var nums = "1234567890"
var userChoice = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){

  //My code
  
  var passwordlength = prompt("Password Length?")

  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password must be between 8-128 Characters")
    return;
  }
  else {
    var lowerCasechoice = confirm("Do you want Lower Case letters?")
    console.log(lowerCasechoice)
    if (lowerCasechoice == true){
      userChoice = userChoice + lowerCase
      console.log(userChoice)

    }

    var upperCasechoice = confirm("Do you want Upper Case Letters?")
    console.log(upperCasechoice)
    if (upperCasechoice == true){
      userChoice = userChoice + upperCase
      console.log(userChoice)

    }

    var specialCharschoice = confirm("Do you want Special Characters?")
    console.log(specialCharschoice)
    if (specialCharschoice == true){
      userChoice = userChoice + specialChars
      console.log(userChoice)

    }

    var numschoice = confirm("Do you want Numbers?")
    console.log(numschoice)
    if (numschoice == true){
      userChoice = userChoice + nums
      console.log(userChoice)

    }

    if (lowerCasechoice === false && upperCasechoice === false && specialCharschoice === false && numschoice === false){
      alert("You must choose at least one Character.")
      return;
    }
    var makePassword = "";
    for (var i=0; i < passwordlength; i++){
      makePassword = makePassword + userChoice.charAt(Math.floor(Math.random() * userChoice.length))
      console.log(makePassword)
    }
    return makePassword;
  }
}
// End my Code

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
