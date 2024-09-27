"use strict";
//  URLify: 
//  Write a method to replace all spaces in a string with '%20'. 
//  You may assume that the string has sufficient space at the end 
//  to hold the additional characters, and that you are given the "true"
//  length of the string. 
//  (Note: If implementing in Java, please use a character array so that you can
//  perform this operation in place.)
//  EXAMPLE
//  
//  Input: "Mr John Smith    ", 13
//  Output:"Mr%20John%20Smith"
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutUrlify = aboutUrlify;
function aboutUrlify(inputString, inputLength) {
    let output = [];
    for (let i = 0; i < inputLength; i++) {
        const c = inputString[i];
        if (c === ' ') {
            output.push('%20');
        }
        else {
            output.push(c);
        }
    }
    return output.join('');
}
