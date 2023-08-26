#!/usr/bin/env node
"use strict";

const merge = function (arrA, arrB) {
  let i = 0;
  let j = 0;
  let arrC = [];

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) arrC.push(arrA[i++]);
    else arrC.push(arrB[j++]);
  }

  for (let k = i; k < arrA.length; k++) {
    arrC.push(arrA[k]);
  }

  for (let k = j; k < arrB.length; k++) {
    arrC.push(arrB[k]);
  }

  return arrC;
};

const mergeSort = function (arr) {
  if (!arr) return undefined;

  // Base case
  if (arr.length <= 1) return arr;

  // Divide
  const mid = Math.trunc(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursion case
  return merge(mergeSort(left), mergeSort(right));
};

const output = mergeSort([9, 3, 7, 5, 6, 4, 8, 2]);
const output2 = mergeSort([]);
const output3 = mergeSort();
console.log(output);
console.log(output2);
console.log(output3);
