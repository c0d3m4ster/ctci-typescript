// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?


// We check for uniqueness without using additional data structures like 
// lists, sets and objects

// defining a function to check if an input string has unique characters
export function isUnique(inputString: string, casesensitive: boolean = true): boolean {
    if (inputString.length > 128) {
        return false;
    }
    if (!casesensitive) {
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