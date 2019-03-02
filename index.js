'use strict';

let salaries = {
  'john': 100,
  'pete': 300,
  'mary': 250
};

function topSalaries (salaries) {
  let key1;
  let max = 0;

  if (salaries === {}) {
    return null;
  } else {
    for (let [key, value] of Object.entries(salaries)) {
      if (value > max) {
        key1 = key;
      }
      max = value;
    }
  }
  return key1;
}
console.log(topSalaries(salaries));
