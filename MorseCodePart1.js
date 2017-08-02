/*
Decode Morse Code - 6 kuy
https://www.codewars.com/kata/decode-the-morse-code/train/javascript
The goal is to -surprise! - Decode morse code. This is part 1 of a three part series of exercises on morse code.
*/

decodeMorse = function(morseCode){
  var codebreakdown = [];
  var result = "";
  var words = morseCode.trim().split("   ").map(function(word){
    return word.split(" ");
  });

  for (var i = 0; i < words.length; i++){
    codebreakdown[i] = [];
    for (var j = 0; j < words[i].length; j++){
      codebreakdown[i].push(MORSE_CODE[words[i][j]]) ;
      }
    }
  for (var i = 0; i < codebreakdown.length; i++){
    if (i === codebreakdown.length -1){
      result += codebreakdown[i].join("");
    }
    else{
      result += codebreakdown[i].join("") + " ";
    }
  }
  return result;
}
