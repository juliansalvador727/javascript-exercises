const convertToCelsius = function (temperature) {
  let n = (temperature - 32) * (5 / 9);
  return parseFloat(n.toFixed(1));
};

const convertToFahrenheit = function (temperature) {
  let n = temperature * (9 / 5) + 32;
  return parseFloat(n.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
