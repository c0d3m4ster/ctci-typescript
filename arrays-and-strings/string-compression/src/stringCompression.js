"use strict";
//  String Compression:
//  Implement a method to perform basic string compression
//  using the counts of repeated characters.
//  For example, the string "aabcccccaaa" would become "a2blc5a3".
//  If the "compressed" string would not become smaller than the original string, 
//  your method should return the original string. 
//  You can assume the string has only uppercase and lowercase letters (a - z).
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCompression = stringCompression;
function stringCompression(inputString) {
    let output = [];
    let compressed = false;
    let counter = 1;
    for (let i = 0; i < inputString.length; i++) {
        if (i > 0 && inputString[i] !== inputString[i - 1]) {
            output.push(inputString[i - 1] + counter.toString());
            if (counter > 1 && !compressed) {
                compressed = true;
            }
            counter = 1;
        }
        else if (i === inputString.length - 1) {
            counter += 1;
            output.push(inputString[i] + counter.toString());
            if (counter > 1 && !compressed) {
                compressed = true;
            }
        }
        else {
            counter += 1;
        }
    }
    return compressed ? output.join('') : inputString;
}
