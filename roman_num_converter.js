// To keep it simple you can use 2 arrays or a SINGLE 2D array (which is an array made of 2 arrays) 
// to provide your Roman Numeral - Integer Conversion key.
// You will need some form of looping in the inputed integer,
// Remember with Roman numerals, you need to start with the largest amount on the left side.
// As you list your Roman Numerals, the remaining value you need to represent will be smaller, 
// so as you loop through, you will be reducing the remaining value left to represent.

function convertToRoman(num) {
  let romanLookup = [
    ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  ];

  let roman = '';
  for(let i = 0; i < romanLookup[0].length; i++) {
    while(num >= romanLookup[1][i]) {
      roman += romanLookup[0][i];
      num -= romanLookup[1][i];
    }
  }
  return roman;
}

var romanButton = document.getElementById('roman-button');
var userInput = document.getElementById('roman');
var convertedNum = document.getElementById('converted');
var convertIt = function() {
  convertedNum.innerHTML = convertToRoman(parseInt(userInput.value));
}
romanButton.addEventListener('click', convertIt);
