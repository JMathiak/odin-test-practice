function capitalize(word) {
  //   let splitWord = word.split();
  //   splitWord[0] = splitWord[0].toUpperCase();
  //   return splitWord.join(",");

  let char = word.charAt(0).toUpperCase();
  let splitWord = word.split("");
  splitWord.shift();
  splitWord.unshift(char);
  let res = splitWord.join("");
  return res;
}

export default capitalize;
