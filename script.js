// Assignment Code
var generateBtn = document.querySelector("#generate");

// 26 abc array lower and uppercase
// 30 symbols arrys
// 10 mumbers arays
var letterLower=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols=["!", "@", "#", "$", "%", "&", "'",  "(", ")", "*", "+", ",", "^", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "_", "`", "{", "~", "}", "|"];
var num=["1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Write password to the #password input
function writePassword() {
  //password generator function.
  function generatePassword(){
    var length = 0;

    //prompts user for input and makes the input a number.
    length = parseInt(prompt("Enter the length of your password between 8-128 characters."));

    //if they click cancel or enter not a number, and end function. then check if the number is between 8-128, if not restart function.
    if (!length) {
      return;
    } else if (length > 128 || length < 8){
      window.alert("Please enter a number between 8 - 128.");
      generatePassword();
    }
    //make a temp array to pull charcters from for the password.
    var tempArray = [];

    //make an array for the final password to sit in/built in.
    var password = [];

    //ask if they wnat different charcter sets, and adds the arrays together inside the tempArray.
    // Also if the user selects yes it adds an element of that type to the password array to guaruntee that type is included in the final password.
    upperCaseCheck = confirm("Do you want uppercase?");
    if (upperCaseCheck == true){
      tempArray.push(...letterUpper);
      password.splice(0, 0, (letterUpper[(Math.floor(Math.random() * letterUpper.length))]));
    }

    lowerCaseCheck = confirm("Do you want lowercase?");
    if (lowerCaseCheck == true){
      tempArray.push(...letterLower);
      password.splice(0, 0, (letterLower[(Math.floor(Math.random() * letterLower.length))]));
    }

    symbolCheck = confirm("do you want symbols?");
    if (symbolCheck == true){
      tempArray.push(...symbols);
      password.splice(0, 0, (symbols[(Math.floor(Math.random() * symbols.length))]));
    }

    numbersCheck = confirm("do you want numbers?");
    if (numbersCheck == true){
      tempArray.push(...num);
      password.splice(0, 0, (num[(Math.floor(Math.random() * num.length))]));
    }

    //check they said yes to atleast one option, if all were no, restart the password generation and tell them they must choose atleast one option.
    if (upperCaseCheck == false && lowerCaseCheck == false && symbolCheck == false && numbersCheck == false){
      alert("You have to choose ATLEAST one option, please start again");
      generatePassword();
    };
    
    //sets the length to be the remaining space in the password array, as each YES option adds one element to the password array.
    length = (length - password.length);

    //splices in a random character from the chosen character sets into the password array at position zero, up to the amount specified by the user.
    for (var i = 0; i < (length); i++) {
      password.splice(0, 0, (tempArray[(Math.floor(Math.random() * tempArray.length))]));
    };

    //uses the join() method to turn the array into a string with no seperator. (eg no comma between each character)
    password = (password.join(''));

    // returns the result so its usable outside the function.
    return password;
  };

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




