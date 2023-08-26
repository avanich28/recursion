#!/usr/bin/env node
"use strict";

const fibs = function (n) {
  if (n <= 0) return [];

  let arr = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return n === 1 ? arr.slice(0, 1) : arr;
};

const output = fibs(8);
console.log(output);
