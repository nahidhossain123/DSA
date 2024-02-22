//check a character is upsercase , lowercase or numeric
const checkCharacter = (ch) => {
  if (!isNaN(ch * 1)) {
    console.log(`${ch} is a numeric character`);
  } else {
    if (ch == ch.toLowerCase()) {
      console.log(`${ch} is a lowercase character`);
    } else if (ch == ch.toUpperCase()) {
      console.log(`${ch} is a uppercase character`);
    } else {
      console.log(`${ch} is not a valid character`);
    }
  }
};

checkCharacter("A");
