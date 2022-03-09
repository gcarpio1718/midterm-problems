function isEvenlyDivisible(num1, num2) {
  if (num1%num2===0){
    return true;
  }else{
    return false;
  }

}

function halfSquare(num1) {
  let squaredNumber =Math.pow(num1,2)/2;
  return squaredNumber; 
}

function isLong(string) {
  if (string.length() >= 15){
    return true;
  }
}

function exclaim(string) {
  let string2 = string;

  //console.log("This is string2 at the beginning.... " + string2);

  for (let i=0; i<string.length; i++){

    // console.log("i = " + i);

    if (string[string.length-(i+1)]==='!'){
      string2 = string.slice(0, string.length - (i+1));

      // console.log("string now equals: " + string2);
    }
  }
  string2 = string2 + "!";

  // console.log("Final product: " + string2);
  return string2; 
}
// exclaim("Hello!!!");


function countWords(string) {
  
  // console.log("String " + string);

  // console.log(string.split(" "));

  // console.log(string.split (" ").length);

  

  return string.split(" ").length; 

}

// countWords("hello you guys");

function containsDigit(_input) {
  let string1 = String(_input);
  for (let i = 0; i < string1.length; i++){
    if(!isNaN(string1.charAt(i)) && ! (string1.charAt(i)===" ") ){ 
      return true;
    }
  }

  return false; 
}

function containsLowerCase(str) {
  return str.toUpperCase() !=str; 
 
}

function containsUpperCase(str) {
  return str.toLowerCase() !=str; 
}

function containsNonAlphanumeric(str) {
  return str.length === 1 && str.match(/[a-z]/i);
  
}


function containsSpace(s) {
  return s.indexOf(' ') >= 0;
}

function digits(num) {
  num = num.toString();
  let numArr = [];
  for (let i =0; i < num.length; i++){
    numArr[i] = parseInt(num[i]);
  }{
    if (num < 0){
      a=a*-1;
    }
  }
  return numArr;
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}