// Assignment Code
var generateBtn = document.querySelector("#generate");
function createPassword() {
  var password = newPassword();
  var passwordInput= document.querySelector("#password");
  passwordInput.value = password
}
 
//click function to listen for click begin password generator prompts
generateBtn.addEventListener("click", createPassword);

function newPassword() {
  var validsize= false;
  while (!validsize) {
    var length =  (prompt("How many characters would you like in your password to consist of? min 8, max 128"));
  // If not enough characters are selected ERROR! 
    if (length < 8) {
    alert("Password must be at least eight characters.");
  } else if (length > 128) {
    alert("Password must have fewer than 128 character.")       
  } else {
    validsize = true;
    
  }
  }
   // number prompt question
 
  var Number = prompt("Do you want numbers in your password? (yes, or no):");
  var numericChar = "";
  var numberopt = "";
  if (Number === "yes") {
    numberopt = "0123456789"
    for (var a = 0; a < length; a ++) {
      numberopt += numericChar.charAt(Math.floor(Math.random() * numericChar.length));
      console.log (numberopt)

    }

  } // specail characters prompt

  var special = "";
  var characters = prompt(" Will you include special characters in your password? (yes, or no)");
  
  if (characters === "yes") {
    characterSpecial = "`~!@$$%^&*<>:;?"
    var characterSet = "";
    for (var b = 0; b < length; b++) {
      special += characterSpecial.charAt(Math.floor(Math.random() * characterSet.length));
      console.log(special)
    } 
  } else {
    alert("Passwords should include special characters for security")
  }
  
  // Uppercase prompt is a if / else statements
  var Upper = prompt("Do you want Uppercase letters in your password? ( yes, or no):");

  var upperSet = "";
  var Uppercase = "";
  if (Upper === "yes") {
    upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   
    for (var c = 0; c < length; c++) {
      Uppercase += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      console.log(Uppercase)
    }
  } else {
    alert("Passwords should contain uppercase letters.")
  }
  
 //lowercase prompt question dido the latter

 
  var Low = prompt("Do you want lowercase letters in your password? (yes, or no)");
  var lower = "";
  var lowerCase = "";
  if (Low === "yes") {
    lowerCase = "abcdefghijklmnopqrstuvwxyz"

    for (var c = 0; c < length; c++) {
      lower += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      console.log()
    }
  } else {
    alert("Combinations of letter casings adds security")
  }  
   // final password generated 
  var password
  var password = Uppercase.concat(lower, numberopt, special );
  console.log(password)
  var finalePassword = "";
  for (var e = 0; e < length; e++) {
    finalePassword += password.charAt(Math.floor(Math.random() * password.length));
    console.log(finalePassword)
  }
  document.getElementById("password").textContent = finalePassword;
  alert(" Here is your new password!: " + finalePassword);
}

