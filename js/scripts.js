
//start with the smallest and most common behavior
//1.
//2. separate tens, hundreds, and thousands
//3. can't go higher than 3,999
//4. subtract if there are mpre than three characters in a row




function convertToRoman(value){
  var output = "";
  if (value<3,999 && value >0){

  }
    return output;
  }




  function placeCounter(number, n) {

    return Math.floor((number / Math.pow(10, n-1)) %10);
  }


function getNumOfDigits(input) {
  return input.toString().length;
}





function digitToSymbol(input){
  var numDigits = getNumOfDigits(input);
  var placeValues = [];
  for (i = 1; i <= numDigits; i++) {
    placeValues.unshift(placeCounter(input, i));


    console.log(placeCounter(input, i));
    console.log(placeValues);
  }

  for(i = 0; i <= placeValues.length; i ++){
    if (placeValues.length)
  }
  switch (numDigits) {
  case 1:
    //we know its a one's digit.
    //Find the roman numeral for the digit value;
    // return symOnes;
    break;
  case 2:
    //we know its a ten's digit
    //find the romal numeral for the 10's and 1's;
    //return symOnes + symTens;
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
}
}

function symOnes(value){
  switch(value) {
    case 1 :
      return "I";
      break;
}






$(document).ready(function(){
    $("button").click(function() {

      var input = $("#input").val();
      // console.log(convertToRoman(input));
      // console.log(placeCounter(input, 2));
      // console.log(getNumOfDigits(input));
      digitToSymbol(input);
    });




 });
