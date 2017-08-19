/*
Decode Morse Code Part 2- 4 kuy
https://www.codewars.com/kata/https://www.codewars.com/kata/decode-the-morse-code-advanced/train/javascriptdecode-the-morse-code/train/javascript
The goal is to decode binary data morse code. This is part 2 of a three part series of exercises on morse code.
*/

decodeBits = function (bits) {
  console.log('bits', bits)

  var result = ""
  var reduced = ""

  while (bits.substring(0, 1) === '0') {
    bits = bits.substring(1, bits.length)
  }
  while (bits.substring(bits.length - 1, bits.length) === '0') {
    bits = bits.substring(0, bits.length - 1)
  }

  if (!bits.includes('0')) {
    return '.';
  }

  var findBase = function (test) {
    var min = test.length;
    var counter = 0;
    var character = test.substring(0, 1)
    for (var i = 0; i < test.length; i++) {
      if (test[i] === character) {
        counter++
      } else {
        if (min > counter) {
          min = counter
        }
        character = test[i]
        counter = 1
      }
    }
    return min;
  }

  var wordParser = function (min) {
    parser = '';
    for (var i = 0; i < min * 7; i++) {
      parser += '0'
    }
    return parser
  }

  var letterParser = function (min) {
    var spaceBetweenLetters = min * 3
    parser = '';
    for (var i = 0; i < spaceBetweenLetters; i++) {
      parser += '0'
    }
    return parser
  }

  var inputParser = function (min) {
    var spaceBetweenInput = min;
    parser = '';
    for (var i = 0; i < spaceBetweenInput; i++) {
      parser += '0'
    }
    return parser
  }

  var thisMin = findBase(bits);
  var words = wordParser(thisMin);
  console.log(words)
  var letters = letterParser(thisMin);
  console.log(letters)
  var inputs = inputParser(thisMin)
  console.log(inputs)

  //reduces the input to the same length
  var base = Math.floor(words.length / 7);
  for (var i = 0; i < bits.length; i++) {
    // console.log('base', base)
    if (i % base === 0) {
      //console.log(bits.substring(i, i+1))
      reduced += bits.substring(i, i + 1);
    }
  }
  var breakdown = reduced.split('0000000')
    .map(function (word) {
      return word.split('000')
    })

  for (var i = 0; i < breakdown.length; i++) {
    for (var j = 0; j < breakdown[i].length; j++) {
      var code = breakdown[i][j].split('0');
      //console.log(code)
      code.forEach(function (value) {
        if (value === '111') {
          result += '-';
        }
        if (value === '1') {
          result += '.';
        }
      })
      result += " ";
    }
    result += "  ";
  }
  return result;

  console.log('result', result)
}

decodeMorse = function (morseCode) {
  var codebreakdown = [];
  var result = "";
  var words = morseCode.trim().split("   ").map(function (word) {
    return word.split(" ");
  });

  for (var i = 0; i < words.length; i++) {
    codebreakdown[i] = [];
    for (var j = 0; j < words[i].length; j++) {
      codebreakdown[i].push(MORSE_CODE[words[i][j]]);
    }
  }
  for (var i = 0; i < codebreakdown.length; i++) {
    if (i === codebreakdown.length - 1) {
      result += codebreakdown[i].join("");
    } else {
      result += codebreakdown[i].join("") + " ";
    }
  }
  return result;
}
