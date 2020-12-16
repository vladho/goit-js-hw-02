const formatString = string => {
  if (string.length > 40) {
    string = string.slice(0, 40) + '...';
    return string;
  } else return string;
};

console.log(
  formatString('Curabitur ligula sapien, tincidunt non.rrrrrrrrrrrrrr'),
);
