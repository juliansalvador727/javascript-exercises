const removeFromArray = function (arr, ...value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (arr[i] === value[j]) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
