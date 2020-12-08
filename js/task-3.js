const findLongestWord = function (string) {
    const words = string.split(" ");
    // console.log(words);
    // console.log(words.length);
    let longestWord = 0;
    // let longestWord = 0;
    for (let i = 0; i < words.length; i += 1) {
        // console.log(words[4]);
        // console.log(Object.values(words[i]));
        console.log(words[4].length);
        // console.log(longestWord);
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
            // console.log(words[longestWord]);
            // console.log(longestWord);
        }
// console.log(longestWord);
        // else
        // longestWord = "false";
    }
    // return longestWord = words[longestWord];
    console.log(longestWord);
    // console.log(words[i]);

}

const r1 = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(r1);
// findLongestWord("The quick brown fox jumped over the lazy dog");