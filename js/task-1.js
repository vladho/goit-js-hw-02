const massiv = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (names) {
  for (let i = 0; i < names.length; i += 1) {
    console.log(`${i} - ${names[i]}`);
  }
};

logItems(massiv);
