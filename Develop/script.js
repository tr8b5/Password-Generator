//Instructions / Psuedocode

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  confirm(
    "Welcome to password generator. In order to create the best possible password for you, please answer the following criteria questions."
  );
  // passwordLength is the password length prompt string
  // passwordInt is the entered string converted into an interger
  var passwordLength = prompt(
    "Please enter your ideal password length from 8 to 128 characters."
  );
  var passwordInt = parseInt(passwordLength);

  // This creates a valid password length check
  if (passwordInt >= 8 && passwordInt <= 128) {
    // Prompts the next criteria
    alert(
      "Thanks for your criteria, for the next four questions please answer yes or no"
    );
    //Ask if password should include lowercase letters
    var passwordLowercase = prompt(
      "Do you want lowercase letters in your password?"
    );
    if (passwordLowercase === "yes" || passwordLowercase === "no") {
      //Ask if password should include uppercase letters
      var passwordUppercase = prompt(
        "Do you want uppercase letters in your password?"
      );
      if (passwordUppercase === "yes" || passwordUppercase === "no") {
        //Ask if password should include numeric letters
        var passwordNumeric = prompt("Do you want numbers in your password?");
        if (passwordNumeric === "yes" || passwordNumeric === "no") {
            var passwordSpecial = prompt("Do you want special characters such as @,#,$ in your password?")
        } else {
          alert("Invalid entry, please enter yes or no");
        }
      } else {
        alert("Invalid entry, please enter yes or no");
      }
    } else {
      alert("Invalid entry, please enter yes or no");
    }
  } else {
    // Error
    alert("Invalid entry, please enter a length between 8 and 128 characters");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
