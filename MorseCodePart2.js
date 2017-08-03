/*
Decode Morse Code Part 2- 4 kuy
https://www.codewars.com/kata/https://www.codewars.com/kata/decode-the-morse-code-advanced/train/javascriptdecode-the-morse-code/train/javascript
The goal is to decode binary data morse code. This is part 2 of a three part series of exercises on morse code.
*/

var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    var result = ""
    var reduced = "";
    for (var i = 0; i < bits.length; i++){
      if(i%2 === 0){
        reduced += bits[i];
      }
    }
    var breakdown = reduced.split("000").map(function(word){
    return word.split("0");
    });
    for (var i = 0; i < breakdown.length; i++){
      for (var j = 0; j< breakdown[i].length; j++){
        if( breakdown[i][j] === '111'){
          result += '-';
        }
        if(breakdown[i][j] === '11'){
          result += '..';
        }
        if( breakdown[i][j] === '1'){
          result += '.';
        }
      }
    result+= "  ";
    }
    return result;
}


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
