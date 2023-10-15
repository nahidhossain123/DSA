const lengthOfLastWord = (s) => {
  const array = s.split(" ");

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] != "") {
      return array[i].length;
    }
  }
};

let s = "   fly me   to   the moon  ";
const result = lengthOfLastWord(s);

console.log("Lenght of last word is:", result);
