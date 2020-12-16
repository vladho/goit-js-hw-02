const findLongestWord = function (string) {
  const words = string.split(' ');
  let long = 0;
  let longestWord;
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > long) {
      long = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord
};

const r1 = findLongestWord('May the force be with you');
console.log(r1);
