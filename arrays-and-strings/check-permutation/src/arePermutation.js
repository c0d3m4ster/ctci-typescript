"use strict";
// Check Permutation: 
// Given two strings, write a method to decide if one is a permutation of the other.
Object.defineProperty(exports, "__esModule", { value: true });
exports.arePermutation = arePermutation;
function arePermutation(inputString1, inputString2) {
    // early exit if lengths are different
    if (inputString1.length !== inputString2.length) {
        return false;
    }
    let counter = 0;
    for (let char of inputString1) {
        counter += char.charCodeAt(0);
    }
    for (let char of inputString2) {
        counter -= char.charCodeAt(0);
    }
    if (counter === 0) {
        return true;
    }
    else {
        return false;
    }
}
