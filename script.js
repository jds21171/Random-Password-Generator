// Assignment Code

// Define variables

var generateBtn = document.querySelector("#generate");
let results = document.querySelector("#result");
let UNInum =[48,57];
let UNIupper = [65,90];
let UNIlower = [97,122];
let UNIsym = [33,47];

// Add event listener to the generate button, then run writePassword function when clicked

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  
  // Define all variables inside function so that new ones load each time generate button is pressed,
  // .value for length to get number, .checked for checkbox for boolean value output

  let length = document.querySelector("#length").value;
  let upper = document.querySelector("#uppercase").checked;
  let lower = document.querySelector("#lowercase").checked;
  let numbers = document.querySelector("#numbers").checked;
  let symbols = document.querySelector("#symbols").checked;
  
  // Creates randSelctor && password arrays for later on

  let randSelector = [];
  let password = [];

  // String.fromCharCode(); I looked up a cool way to loop through an array whose values are on the 
  // unique browser character set for chrome

  if(upper===true){
    for(let i=UNIupper[0]; i<= UNIupper[1]; i++){
      randSelector.push(i);
    }
  }
  if(numbers===true){
    for(let i=UNInum[0]; i<= UNInum[1]; i++){
      randSelector.push(i);
    }
  }
  if(symbols===true){
    for(let i=UNIsym[0]; i<= UNIsym[1]; i++){
      randSelector.push(i);
    }
  }
  if(lower===true){
    for(let i=UNIlower[0]; i<= UNIlower[1]; i++){
      randSelector.push(i);
    }
  }

  // Making sure randSelector is working correctly, should return an array of numbers that come 
  // from each of the selected charSets

  console.log(randSelector);

  // The below equation then turns each number from the array from above to each unique character 
  // from their corresponding sets
  
  for(let i = 0; i < length; i++){
    password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
  }

  // I double check to make sure the password is correct then I join my newly generated password with
  // the text content from the blank password block (which I renamed results)

  console.log(password);
  results.textContent = password.join("");
}