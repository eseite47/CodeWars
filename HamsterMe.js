/*
HamsterMe - 5 kuy
https://www.codewars.com/kata/hamster-me/train/javascript
The goal is to take in a message and a code.
Use the code to create a matrix that crypts the alphabet and use that to encode the message.
*/

var codeBreakDown = function(str){
  //the holder with hold my alphabet broken down according to the code
  var holder = {}
  //My index will iterate over the alphabet, making sure I stay within the bounds of the holder
  var index = 0;

  var dictionary = 'abcdefghijklmnopqrstuvwxyz';
  var code = str.toLowerCase().split("").sort().filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

  //Creating the Holder, using the ordered letters of the code
  for (var i = 0; i < code.length; i++){
    if(!holder[code[i]]){
      holder[code[i]] = [code[i]];
    }
  }

  //Rearanging the alphabet, to start at the first letter of my holder
  var breakpoint = dictionary.indexOf(holder[code[0]])
  var alphabet = (dictionary.substring(breakpoint, dictionary.length) + dictionary.substring(0, breakpoint)).split("")
  console.log(alphabet)

  //filling the holder with the letters of the alphabet to create a matrix
  alphabet.forEach(function(value){
    if (code.includes(value)){
      if(index < str.length){
        index++;
      }
    }
    else{
      holder[code[index-1]].push(value);
    }
  });
  //returnin my coding matrix
  return holder
}

var hamsterMe = function(code, message){
  //Get the crypting matrix
  var cryptedCode = codeBreakDown(code);
  var newMessage = message.split("")
  //setting up my result array
  var cryptedLetters = []

  //for each letter of the message, find the corresponding code in the matrix
  newMessage.forEach(function(value){
    for (var key in cryptedCode){
      if (cryptedCode[key].includes(value)){
        var i = cryptedCode[key].indexOf(value) +1;
        console.log("key", key, "value", cryptedCode[key].indexOf(value))
        cryptedLetters.push(key+i)
        console.log(cryptedLetters)
      }
    }
  })
  //return the coded message
  return cryptedLetters.join("");
}
