// One Away: 
// There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// pale, pal   -> true
// pales, pale -> true
// pale, bale  -> true
// pale, bake  -> false

export function oneAway(s1: string, s2: string): boolean {
    const len1 = s1.length;
    const len2 = s2.length;
  
    // If the length difference is more than 1, return false
    if (Math.abs(len1 - len2) > 1) {
      return false;
    }
  
    // Check for replacing a character
    if (len1 === len2) {
      let count = 0;
      for (let i = 0; i < len1; i++) {
        if (s1[i] !== s2[i]) {
          count++;
        }
        if (count > 1) {
          return false;
        }
      }
      return true;
    }
    // Check for removing or inserting a character
    else {
      if (len1 > len2) {
        return oneInsert(s1, s2);
      } else {
        return oneInsert(s2, s1);
      }
    }
  }


function oneInsert(s1: string, s2: string): boolean {
    // We assume s1 is one character longer than s2
    let i = 0;
    let j = 0;
    let count = 0;

    while (i < s1.length && j < s2.length) {
        if (s1[i] !== s2[j]) {
            count += 1;
            i += 1; // Move index of s1 forward
        } else {
            i += 1; // Move both indices forward if characters match
            j += 1;
        }
        if (count > 1) {
            return false; // More than one insertion needed
        }
    }

    return true; // Valid if at most one insertion is needed
}