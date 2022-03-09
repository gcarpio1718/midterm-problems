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

function isLong() {
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
  
  console.log("String " + string);

  console.log(string.split(" "));

  console.log(string.split (" ").length);

  

  return string.split(" ").length; 

}

countWords("hello you guys");

function containsDigit() {
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
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