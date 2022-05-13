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

function reverseString(word) {
  return word.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function caesarCipher(word) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    let ind = alphabet.indexOf(arr[i]);
    if (!arr[i].match(/^[.,:!?]/)) {
      if (ind == 25) {
        arr[i] = alphabet[0];
      } else {
        arr[i] = alphabet[ind + 1];
      }
    }
  }
  return arr.join("");
}

function analyzeArray(array) {
  let averageNum = array.reduce((prev, cur) => prev + cur, 0) / array.length;
  let minNum = Math.min(...array);
  let returnObj = {
    average: averageNum,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return returnObj;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
