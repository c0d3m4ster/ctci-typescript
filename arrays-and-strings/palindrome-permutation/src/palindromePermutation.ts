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

export function palindromePermutation(inputString: string): boolean {
    // Convert the input string to lowercase and remove spaces
    inputString = inputString.toLowerCase().replace(/\s+/g, '');

    // Create a counter object to keep track of character occurrences
    const counter: { [key: string]: number } = {};

    // Count occurrences of each character
    for (const chr of inputString) {
        if (counter[chr]) {
            counter[chr]++;
        } else {
            counter[chr] = 1;
        }
    }

    // Calculate the number of characters with odd occurrences
    const oddCount = Object.values(counter).filter((val: number) => val % 2 !== 0).length;

    // A string can be permuted to a palindrome if it has at most one character with an odd count
    return oddCount <= 1;
}