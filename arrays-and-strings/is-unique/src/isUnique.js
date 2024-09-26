"use strict";
// src/isUnique.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnique = isUnique;
function isUnique(inputString, caseInsensitive = true) {
    if (inputString.length > 128) {
        return false;
    }
    if (caseInsensitive) {
        inputString = inputString.toLowerCase();
    }
    let bitVector = 0;
    for (const char of inputString) {
        const bitPosition = char.charCodeAt(0);
        const bitMask = 1 << bitPosition;
        if ((bitVector & bitMask) > 0) {
            return false;
        }
        bitVector |= bitMask;
    }
    return true;
}
