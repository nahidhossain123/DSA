/* ##########--build-in function-###########  */
const reverseString1 = (str) => {
  //convert string into array
  const strToArray = str.split("");

  //reverse the array
  const reversArray = strToArray.reverse();

  //join all the elements of the array into a string
  const reassembleString = reversArray.join("");

  //return the final output
  return reassembleString;
};
console.log(reverseString1("how are you?"));

/* ########-Shorthand of build-in function-########  */
const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString2("Fine, thank you"));

/* ########-Decrementing For loop-########  */
const reverseString3 = (str) => {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};
console.log(reverseString3("What about you?"));
