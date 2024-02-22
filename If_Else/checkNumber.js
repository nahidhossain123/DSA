//Find numer is positive, negative or zero
const checkNumber = (a, b, c) => {
  if (a > 0) {
    console.log("Positive Numbser");
  } else {
    if (a < 0) {
      console.log("Negative Numbser");
    } else {
      console.log("Number Is Zero");
    }
  }
  if (b > 0) {
    console.log("Positive Numbser");
  } else {
    if (b < 0) {
      console.log("Negative Numbser");
    } else {
      console.log("Number Is Zero");
    }
  }
  if (c > 0) {
    console.log("Positive Numbser");
  } else {
    if (c < 0) {
      console.log("Negative Numbser");
    } else {
      console.log("Number Is Zero");
    }
  }
};

checkNumber(10, -20, 0);
