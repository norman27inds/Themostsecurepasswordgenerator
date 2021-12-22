const resultElement= document.getElementById("result")
const lengthElement= document.getElementById("length")
const uppercaseElement= document.getElementById("uppercase")
const lowercaseElement= document.getElementById("lowercase")
const numbersElement= document.getElementById("numbers")
const symbolElement= document.getElementById("symbol")
const generateElement= document.getElementById("generate")
const clipboardElement= document.getElementById("clipboard")

/*
  window.alert("select password criteria")
  console.log(window.alert)
*/



const randomFunction= {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
  length: getRandomLength,
}

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}
function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>,.';
  return symbols[Math.floor(Math.random()* symbols.length)];
}
function getRandomLength(){
  return String.fromCharCode()
}
function generatePassword(){
  let possibleCharacters = ""

  let passwordLength = prompt("How long would you like your password(8-128 characters)")
   
  if (passwordLength <8 || passwordLength >128){
    alert("Password length does not match, Please make sure your password is 8-128 characters");
    return;
  }
  let uppercase = confirm("Add uppercase letters?")

  let lowercase = confirm("Add lowercase letters?")

  let symbols = confirm("Add symbols?")

  let numbers = confirm("Add numbers?")
  
  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    if (uppercase && lowercase && numbers && symbols) {
      const choice = Math.floor(Math.random() * 4);

      if (choice === 0) {
        password += getRandomUpper()
      }
      if (choice === 1) { 
        password += getRandomLower()
      }
      if (choice === 2) {
        password += getRandomSymbol()
      }
      if (choice === 3) {
        password += getRandomNumber()
      }
    }
    else if (uppercase && lowercase && symbols) {
      const choice = Math.floor(Math.random() * 3);

      if (choice === 0) {
        password += getRandomUpper()
      }
      if (choice === 1) {
        password += getRandomLower()
      }
      if (choice === 2) {
        password += getRandomSymbol()
      }
    }
    else if (uppercase && numbers && symbols) {
      const choice = Math.floor(Math.random() * 3);

      if (choice === 0) {
        password += getRandomUpper()
      }
      if (choice === 1) {
        password += getRandomNumber()
      }
      if (choice === 2) {
        password += getRandomSymbol()
      }
    }
    else if (lowercase && numbers && symbols) {
      const choice = Math.floor(Math.random() * 3);

      if (choice === 0) {
        password += getRandomLower()
      }
      if (choice === 1) {
        password += getRandomNumber()
      }
      if (choice === 2) {
        password += getRandomSymbol()
      }
    }
    else if (uppercase && lowercase && numbers) {
      const choice = Math.floor(Math.random() * 3)

      if (choice === 0){
        password += getRandomUpper()
      }
      if (choice === 1) {
        password += getRandomLower()
      }
      if (choice === 2) {
        password += getRandomNumber()
      }
    }
    else if (uppercase && lowercase) {
      const choice = Math.floor(Math.random()* 2)

      if (choice === 0) {
        password += getRandomUpper()
      }
      if (choice === 1) {
        password += getRandomLower()
      }
    }
    else if (uppercase && numbers) {
      const choice = Math.floor(Math.random() * 2)

      if (choice === 0) {
        password += getRandomUpper()
      }
      if (choice === 1) {
        password += getRandomNumber()
      }
    }
    else if (uppercase && symbols) {
      const choice = Math.floor(Math.random() * 2)

      if (choice === 0) {
        password += getRandomUpper()
      }
      if (choice === 1) {
        password += getRandomSymbol()
      }
    }
    else if (lowercase && numbers) {
      const choice = Math.floor(Math.random() * 2)

      if (choice === 0) {
        password += getRandomLower()
      }
      if (choice === 1) {
        password += getRandomNumber()
      }
    }
    else if (lowercase && symbols) {
      const choice = Math.floor(Math.random() * 2)

      if (choice === 0) {
        password += getRandomLower()
      }
      if (choice === 1) {
        password += getRandomSymbol()
      }
    }
    else if (numbers && symbols) {
      const choice = Math.floor(Math.random() * 2)

      if (choice === 0) {
        password += getRandomNumber()
      }
      if (choice === 1) {
        password += getRandomSymbol()
      }
    }
  
  }
  

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


