// String Rotation:
// Assume you have a method isSubstring which checks if
// one word is a substring of another.
// Given two strings, sl and s2, write code to check if
// s2 is a rotation of sl using only one call to isSubstring
// (e.g.,"waterbottle" is a rotation of "erbottlewat").

function isSubstring(s1: string, s2: string): boolean {
  return s1.includes(s2);
}

const stringRotation = (s1: string, s2: string): boolean => {
  // Check if lengths are equal and not empty
  if (s1.length !== s2.length || s1.length === 0) {
    return false;
  }

  // Concatenate s1 with itself
  const concatenated = s1 + s1;

  // Check if s2 is a substring of the concatenated string
  return isSubstring(concatenated, s2);
};

export default stringRotation;
