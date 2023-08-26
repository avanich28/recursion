#!/usr/bin/env node
"use strict";

const fibsRec = function (n) {
  if (n === 0) return [];
  // Base case
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Recursive case (until reach n = 2 and return [0, 1])
  let arr = fibsRec(n - 1);

  // After get arr, arr will equal to [0, 1]
  // n = 3 -> [0, 1, 1]
  // n = 4 -> [0, 1, 1, 2]
  return [...arr, arr[n - 3] + arr[n - 2]];
};

const output = fibsRec(8);
console.log(output);
