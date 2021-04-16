var generateBtn = document.querySelector('#generate');
const uppercase = [
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
  'Z',];
const lowercase = [
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
'z',];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];
var start;
var conNum;
var conSym;
var conUpp;
var conLow;
var options = [];


function generatePassword() {
  var start = Number(prompt('What is your desired length? Choose between 8 and 128'));
  function check() {
    if (!start) {
      alert("This needs a numerical value");
    } else if (start < 8 || start > 128) {
      start = prompt("You must choose between 8 and 128");
      check();
    } else {
      conNum = confirm("Will this contain numbers?");
      conSym = confirm("Will this contain special symbols?");
      conUpp = confirm("Will this contain Uppercase letters?");
      conLow = confirm("Will this contain Lowercase letters?");
    }
  }
  check();
  if (conSym) {
    options = options.concat(symbols); 
  }
  if (conNum) {
    options = options.concat(numbers);
  }
  if (conUpp) {
    options = options.concat(uppercase);
  }
  if (conLow) {
    options = options.concat(lowercase);
  } 
  if (!conSym && !conNum && !conUpp && !conLow) {
    alert('You much choose a criteria');
    return generatePassword();  
  }
  var password = [];
  for (var i = 0; i < start; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
  }
  var result = password.join('');
  return result;  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);