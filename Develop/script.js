// Assignment Code
var generateBtn = document.querySelector("#generate");

//click function to listen for click begin password generator prompts
generateBtn.addEventListener("click", function () {
  var password = prompt("Would you like to create a password? (yes, or no):");
  password = password.toLowerCase();
  if (password === "yes") {
    generatePassword();
  }
});

function generatePassword() {
  var goodsize= false;
  while (!goodsize) {
    var length = Number(prompt("How many characters would you like in your password to consist of? min 8, max 128"));
  // If not enough characters are selected ERROR! 
    if (length < 8) {
    alert("Password must be at least eight characters.");
  } else if (length > 128) {
    alert("Password must have fewer than 128 character.")       
  } else {
    goodsize = true;
  }
  }
   // number prompt question
  var Numeric = "";
  var Number = prompt("Do you want numbers in your password? (yes, or no)");
  if (Number === "yes") {
    var numberopt = "0123456789"

    for (var c = 0; c < length; c++) {
      Numeric += numberopt.charAt(Math.floor(Math.random() * numberopt.length));
      console.log(Numeric)
    }
  } else {
    alert("Please include numbers for optimal securitey")


  } // specail characters prompt

  var special = "";
  var characters = prompt("Do you want to special characters in your password? (yes, or no)");
  
  if (characterSpecial === "yes") {
    characterSpecial = "`~!@$$%^&*<>:;?"
    var characterSet = "";
    for (var d = 0; d < length; d++) {
      characterSet += Characters.charAt(Math.floor(Math.random() * Characters.length));
      console.log(charaSet)
    } 
  } else {
    alert("Passwords should include special characters for security")
  }
  
  // Uppercase prompt is a if / else statements
  var Up = prompt("Do you want Uppercase letters in your password? ( yes, or no):");

  var upperSet = "";
  var Uppercase = "";
  if (Upper === "yes") {
    upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   
    for (var a = 0; a < length; a++) {
      Uppercase += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      console.log(Uppercase)
    }
  } else {
    alert("Passwords should contain uppercase letters.")
  }
  
 //lowercase prompt question dido the latter

  var valRet = "";
  var Lower = prompt("Do you want lowercase letters in your password? (yes, or no)");

  var lowerCase = "";
  if (Lower === "yes") {
    lowerCase = "abcdefghijklmnopqrstuvwxyz"

    for (var b = 0; b < length; b++) {
      valRet += lowerSet.charAt(Math.floor(Math.random() * lowerCase.length));
      console.log()
    }
  } else {
    alert("Combinations of letter casing adds security")
  }  
   // final password generated 
  var passWord = Uppercase.concat(valRet, Numeric, charaSet);
  console.log(passWord)
  var finalPass = "";
  for (var e = 0; e < length; e++) {
    finalPass += passWord.charAt(Math.floor(Math.random() * passWord.length));
    console.log(finalPass)
  }
  document.getElementById("password").textContent = finalPass;
  alert(" Here is your new password!: " + finalPass);
}
