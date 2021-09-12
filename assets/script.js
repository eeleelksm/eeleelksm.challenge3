// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
//looking at html for this file, in reference to html button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//when someone clicks button, run the writePassword function

allUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
allLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
allSpecial = ["!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", ":", "_", "`", "{", "|", "}", "~"];

var getPassword = [];
var lengthQuestion;
var uppercaseQuestion;
var lowercaseQuestion;
var numberQuestion;
var specialQuestion;
var userPick;


var generatePassword = function() {//returning the password -- example: return "superSecretPassword"; //prints in the textarea
  //user clicks on the generate password button, gets a greeting
  document.getElementById("generate").innerHTML=
  alert("Welcome to the Password Generator!");

  getPasswordLength();
  getUppercase();
  getLowercase();
  getNumbers();
  getSpecial();

  if (uppercaseQuestion === "yes" && 
      lowercaseQuestion === "yes" &&
      numberQuestion === "yes" &&
      specialQuestion === "yes") {
        userPick = allUppercase.concat(allLowercase, allNumbers, allSpecial);
  }

  for (var i = 0; i <= lengthQuestion.length; i++) {
    var finaluserPick = userPick[Math.floor(Math.random() * userPick.length)]
    getPassword.push(finaluserPick);
  }
  return getPassword;
}

var getPasswordLength = function() {
  //window prompt asks how many characters for the password
  //window mentions must be between 8 and 128 characters
  lengthQuestion = prompt("How many characters would you like in your password? Choose a length of at least 8 characters and no more than 128 characters.");
  passwordLength = parseInt(lengthQuestion);

  //if passwordLength is 8-128 and a number, window tells you # of characters
  //if passwordLength does not follow this, alert message to try again
  if (passwordLength >= 8 && passwordLength <= 128 && (Number.isInteger(passwordLength))) {
    alert("Your password is " + passwordLength + " characters long.");  
  } else { 
    alert("Invalid entry. Please try again.");
    getPasswordLength();
  }
}

var getUppercase = function() {
  //asks if they'd like uppercase letters in password, yes or no
  uppercaseQuestion = prompt("Would you like uppercase letters in your password?\n\n Please type 'YES' or 'NO'");
  uppercaseQuestion = uppercaseQuestion.toLowerCase();
  //if yes, window alert says uppercase letters has been added
  if (uppercaseQuestion === "yes") {
    alert("Uppercase letters have been added to your password.");
    //if no, window alert says uppercase letters haven't been added
  } else if (uppercaseQuestion === "no") {
    alert("Uppercase letters have not been added to your password.");
    //if it isn't no or yes entered, it says try again and calls the function
  } else {
    alert("Invalid entry. Please try again.");
    getUppercase();
  }
}

var getLowercase = function() {
  //asks if they'd like lowercase letters in password, yes or no
  lowercaseQuestion = prompt("Would you like lowercase letters in your password?\n\n Please type 'YES' or 'NO'");
  lowercaseQuestion = lowercaseQuestion.toLowerCase();
  //if yes, window alert says lowercase letters has been added
  if (lowercaseQuestion === "yes") {
    alert("Lowercase letters have been added to your password.");
    //if no, window alert says lowercase letters haven't been added
  } else if (lowercaseQuestion === "no") {
    alert("Lowercase letters have not been added to your password.");
    //if it isn't no or yes entered, it says try again and calls the function
  } else {
    alert("Invalid entry. Please try again.");
    getLowercase();
  }
}

var getNumbers = function() {
  //asks if they'd like numbers in password, yes or no
  numberQuestion = prompt("Would you like numbers in your password?\n\n Please type 'YES' or 'NO'");
  numberQuestion = numberQuestion.toLowerCase();
  //if yes, window alert says numbers has been added
  if (numberQuestion === "yes") {
    alert("Numbers have been added to your password.");
    //if no, window alert says numbers haven't been added
  } else if (numberQuestion === "no") {
    alert("Numbers have not been added to your password.");
    //if it isn't no or yes entered, it says try again and calls the function
  } else {
    alert("Invalid entry. Please try again.");
    getNumbers();
  }
}

var getSpecial = function() {
  //asks if they'd like special characters in password, yes or no
  specialQuestion = prompt("Would you like special characters in your password?\n\n Please type 'YES' or 'NO'");
  specialQuestion = specialQuestion.toLowerCase();
  //if yes, window alert says special characters has been added
  if (specialQuestion === "yes") {
    alert("Special characters have been added to your password.");
    //if no, window alert says special characters haven't been added
  } else if (specialQuestion === "no") {
    alert("Special characters have not been added to your password.");
    //if it isn't no or yes entered, it says try again and calls the function
  } else {
    alert("Invalid entry. Please try again.");
    getSpecial();
  }
}

// var getPassword = function() {
//  functionname = functionnames[Math.floor(Math.random() * lengthQuestion.length)]
//  let character;
//  switch (functionname) {}

 // if (let i = 0; i <lengthQuestion.length; i++ {
  
//   functionnames =[] //make global
//   functionname = functionnames[Math.floor(Math.random() * lengthQuestion.length)];
//   let character;
//   switch (functionname) {
//     case "generateUppercase":
//       character = generateUppercase();
//       break;
//     case "generateLowercase":
//       character = generateLowercase();
//       break;
//     case "generateNumbers":
//       character = generateNumbers();
//       break;
//     case "generateSpecial":
//       character = generateSpecial();
//       break;
//   }
//   pwComplete += character;
// }

/**HELP -- iterating through the variables to get final password
 * 
 * 
 * 
 *  
 * 
 * 
 * var ?? = pwLowercase[Math.floor(Math.random() * lengthQuestion.length)]
 * var ?? = pwNumbers[Math.floor(Math.random() * lengthQuestion.length)]
 * var ?? = pwSpecial[Math.floor(Math.random() * lengthQuestion.length)]
 * 
 * for(let i = 0; i <lengthQuestion.length; i++ {
 *  pwComplete += pwUppercase.charAt(Math.floor(Math.random() * lengthQuestion.length)
 *  );
 * }
 * return pwComplete;
 * 
 */



/**
 * PSUEDOCODE
 * user clicks on the generate password button, gets a greeting
 * user clicks again
 * window prompt asks how many characters for the password
 * window mentions must be between 8 and 128 characters
 * if the user puts anything else but what's between 8-128
 *    window alert to try again, then loops back to ask the question
 * user selects character between 8 and 128 characters
 * window alert reads back how many characters the password will be
 * user clicks again
 * window asks if they'd like uppercase letters in password, yes or no
 *    if yes, the do math random on variable that has all uppercase letters
 *    if no, skip to next --
 * window asks if they'd like lowercase letters in password, yes or no
 *    if yes, the do math random on variable with all lowercase letters
 *    if no, skip to next --
 * window asks if they'd like numbers in their password
 *    if yes, the do math random on variable with all numbers
 *    if no skip to next --
 * window asks if they'd like special characters in their password
 *    if yes, the do math random on variable with all lowercase letters
 * window alert then says password generated
 * generatePassword then prints the generated password into the textarea
 */

  // else if (uppercaseQuestion === "yes" && 
  //     lowercaseQuestion === "yes" &&
  //     numberQuestion === "yes") {
  //       userPick = allUppercase.concat(allLowercase, allNumbers);
  // }
  // else if (uppercaseQuestion === "yes" && 
  //     lowercaseQuestion === "yes" &&
  //     numberQuestion === "yes" &&
  //     specialQuestion === "yes") {
  //       userPick = allUppercase.concat(allLowercase, allNumbers, allSpecial);
  // }
  // else if (uppercaseQuestion === "yes" && 
  //     lowercaseQuestion === "yes" &&
  //     numberQuestion === "yes" &&
  //     specialQuestion === "yes") {
  //       userPick = allUppercase.concat(allLowercase, allNumbers, allSpecial);
  // }
  // if (uppercaseQuestion === "yes" && 
  //     lowercaseQuestion === "yes" &&
  //     numberQuestion === "yes" &&
  //     specialQuestion === "yes") {
  //       userPick = allUppercase.concat(allLowercase, allNumbers, allSpecial);
  // }
  // if (uppercaseQuestion === "yes" && 
  //     lowercaseQuestion === "yes" &&
  //     numberQuestion === "yes" &&
  //     specialQuestion === "yes") {
  //       userPick = allUppercase.concat(allLowercase, allNumbers, allSpecial);
  // }
  
  //alert("Your password has been generated.");
  //return getPassword(); *console.log to help