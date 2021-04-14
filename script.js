// Assignment Code
var generateBtn = document.querySelector("#generate");

var start; 
var confirmNumber; 
var confirmCharacter; 
var confirmUpper;
var confirmLower; 
var choices; 


const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  
const numbers = [1,2,3,4,5,6,7,8,9,0]; 
const symbols = ["!","@","#","$","%","^","&","*","_","-","+","="]; 


function generatePassword() {
  var start = Number((prompt("What is your desired length? Choose between 8 and 128")));

  if (!start) {
    alert("This needs a value");
  } else if (start <= 8 || start => 128) {
    start = parseInt(prompt("You must choose between 8 and 128"))
  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmSymbol = confirm("Will this contain special symbols?");
    confirmUpper = confirm("Will this contain Uppercase letters?");
    confirmLower = confirm("Will this contain Lowercase letters?"); 
  }

  if (!confirmSymbol && !confirmNumber && !confirmUpper && !confirmLower) {
    choices = alert("You must choose a criteria"); 
  } else if (confirmSymbol && confirmNumber && confirmUpper && confirmLower) {
    choices = symbols.concat(numbers, uppercase, lowercase);
  } else if (confirmSymbol && confirmNumber && confirmUpper) {
    choices = symbols.concat(numbers, lowercase);
  } else if (confirmSymbol && confirmNumber && confirmLower) {
    choices = symbols.concat(numbers, uppercase); 
  } else if (confirmSymbol && confirmLower && confirmUpper) {
    choices = symbols.concat(uppercase, lowercase); 
  } else if (confirmNumber && confirmLower && confirmUpper) {
    choices = numbers.concat(uppercase, lowercase); 
  } else if (confirmSymbol && confirmNumber) {
    choices = symbols.concat(numbers);
  } else if (confirmSymbol && confirmLower) {
    choices = symbols.concat(uppercase); 
  } else if (confirmSymbol && confirmUpper) {
    choices = symbols.concat(lowercase);
  } else if (confirmLower && confirmUpper) {
    choices = uppercase.concat(numbers); 
  } else if (confirmLowercase && confirmUppercase) {
    choices = uppercase.concat(lowercase);
  } else if (confirmNumber && confirmUppercase) {
    choices = numbers.concat(lowercase);
  } else if (confirmSymbol) {
    choices = symbols;
  } else if (confirmNumber) {
    choices = numbers;
  } else if (confirmLowercase) {
    choices = uppercase; 
  }

  var password = []; 

  for (var i = 0; i < start; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices); 
  }

  var result = password.join(""); 
  return result; 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



