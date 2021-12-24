var lowercasedLetters = [
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
]

var uppercasedLetters = [
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
]

var specialCharacters = [
' ',
'!',
'"',
'#',
'$',
'%',
'&',
"'",
'(',
')',
'*',
'+',
',',
'-',
'.',
'/',
':',
';',
'<',
'=',
'>',
'?',
'@',
'[',
'\\',
']',
'^',
'_',
'`',
'{',
'|',
'}',
'~'
]

var numbers = [
'0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9'
]

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  // TODO: add code to generate the password here
  var prompt1 = alert("Please answer the following criteria:");

  var prompt2 = prompt("Length of password? (choose a number between 8-128");
  var prompt1int = parseInt(prompt2);
  var prompt3 = confirm("Lower case letters?");
  
  var prompt4 = confirm("Upper case letters?");
  
  var prompt5 = confirm("Special characters?");

  var prompt6 = confirm("Numbers?");

var allarrays = lowercasedLetters + uppercasedLetters + specialCharacters + numbers


for(i = 0; i < prompt1int; i++) {

  if(prompt3 === true) {
    var rand = Math.floor(Math.random()*25);
password += lowercasedLetters [rand]
 prompt3 = false
  }

  else if(prompt4 === true) {
  var rand = Math.floor(Math.random()*25);
  password += uppercasedLetters [rand]
  prompt4 = false
  }

  else if(prompt5 === true) {
  var rand = Math.floor(Math.random()*33);
  password += specialCharacters [rand]
  prompt5 = false
  }

  else if(prompt6 === true) {
    var rand = Math.floor(Math.random()*10);
    password += numbers [rand]
    prompt6 = false
  }

else {
  var rand = Math.floor(Math.random()*allarrays.length - 1);
  password += allarrays [rand]
}

}

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
