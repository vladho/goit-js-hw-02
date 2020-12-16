const calculateEngravingPrice = function (message, pricePerWord) {
    const wordCount = message.split(' ');

    const calculate = wordCount.length * pricePerWord;
    return calculate
};

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);