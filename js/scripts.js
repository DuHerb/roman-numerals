
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













$(document).ready(function(){
    $("button").click(function() {

      var input = $("#input").val();
      // console.log(convertToRoman(input));
      // console.log(placeCounter(input, 2));
      // console.log(getNumOfDigits(input));

      var numDigits = getNumOfDigits(input);
      for (i = 1; i <= numDigits; i++) {
        console.log(placeCounter(input, i));
      }

   });



 });
