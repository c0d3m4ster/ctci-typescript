export function removeDups(s1: string, s2: string): boolean {
  const len1: number = s1.length;
  const len2: number = s2.length;

  // If the length difference is more than 1, return false
  if (Math.abs(len1 - len2) > 1) {
    return false;
  }

  // Check for replacing a character
  if (len1 === len2) {
    let count: number = 0;
    for (let i: number = 0; i < len1; i++) {
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
  let i: number = 0;
  let j: number = 0;
  let count: number = 0;

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
