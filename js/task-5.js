const checkForSpam = function (message) {
  let result;

  message = message.toLowerCase();
  if (message.includes('spam') || message.includes('sale')) {
    result = 'true';
  } else {
    result = 'false';
  }

  return result;
};

console.log(checkForSpam('Get best Alew offers now!'));
