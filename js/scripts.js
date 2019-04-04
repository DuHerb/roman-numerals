
//start with the smallest and most common behavior
//1.
//2. separate tens, hundreds, and thousands
//3. can't go higher than 3,999
//4. subtract if there are mpre than three characters in a row


$(document).ready(function(){
    $("form").submit(function(event) {
      // debugger;
      var input = parseInt($("#input").val());
      // console.log(convertToRoman(input));
      // console.log(placeCounter(input, 2));
      // console.log(getNumOfDigits(input));
      console.log(input);
      $("#output").empty();
      $('#output').append("<br>" + convertToRoman(input));
      event.preventDefault();
    });
 });

function convertToRoman(value){
  if (value < 3999 && value > 0){
    return digitToSymbol(value);
  } else {
      alert("Invalid Number");
    return "error";
  }
}

  function digitToSymbol(input){
    var numDigits = input.toString().length;
    var placeValues = [];
    var output = "";
      for (i = 1; i <= numDigits; i++) {
        placeValues.unshift(placeCounter(input, i));
    }
    switch (numDigits) {
      case 1:
        // alert("Invalid Number");
          output = symOnes(placeValues[0]);
        //we know its a one's digit.
        //Find the roman numeral for the digit value;
        // return symOnes;
        break;
      case 2:
          output = symTens(placeValues[0]) + symOnes(placeValues[1]);
        //we know its a ten's digit
        //find the romal numeral for the 10's and 1's;
        //return symOnes + symTens;
        break;
      case 3:
          output = symHundreds(placeValues[0]) + symTens(placeValues[1]) + symOnes(placeValues[2]);
         break;
      case 4:
        output = symThousands(placeValues[0]) +symHundreds(placeValues[1]) + symTens(placeValues[2]) + symOnes(placeValues[3]);
        break;
    }

    return output;
  }


    function placeCounter(number, n) {
      return Math.floor((number / Math.pow(10, n-1)) %10);
    }





function symOnes(value){
  switch(value) {
    case 0:
      return "";
      break;
    case 1 :
      return "I";
      break;
    case 2 :
      return "II";
      break;
    case 3 :
      return "III";
      break;
    case 4 :
      return "IV";
      break;
    case 5 :
      return "V";
      break;
    case 6 :
      return "VI";
      break;
    case 7 :
      return "VII";
      break;
    case 8 :
      return "VIII";
      break;
    case 9 :
      return "IX";
      break;
  }
}

function symTens(value){
  switch(value) {
    case 0:
      return "";
      break;
    case 1 :
      return "X";
      break;
    case 2 :
      return "XX";
      break;
    case 3 :
      return "XXX";
      break;
    case 4 :
      return "XL";
      break;
    case 5 :
      return "L";
      break;
    case 6 :
      return "LX";
      break;
    case 7 :
      return "LXX";
      break;
    case 8 :
      return "LXXX";
      break;
    case 9 :
      return "XC";
      break;
  }
}

function symHundreds(value){
  switch(value) {
    case 0:
      return "";
      break;
    case 1 :
      return "C";
      break;
    case 2 :
      return "CC";
      break;
    case 3 :
      return "CCC";
      break;
    case 4 :
      return "CD";
      break;
    case 5 :
      return "D";
      break;
    case 6 :
      return "DC";
      break;
    case 7 :
      return "DCC";
      break;
    case 8 :
      return "DCCC";
      break;
    case 9 :
      return "CM";
      break;
  }
}

function symThousands(value){
  switch(value) {
    case 0:
      return "";
      break;
    case 1 :
      return "M";
      break;
    case 2 :
      return "MM";
      break;
    case 3 :
      return "MMM";
      break;
  }
}
