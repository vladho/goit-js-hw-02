const calculateEngravingPrice = function (message, pricePerWord) {
    const wordCount = message.split(' ');

    const calculate = wordCount.length * pricePerWord;
    console.log(calculate);
};

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);