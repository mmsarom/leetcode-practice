/**
 * Brute force approach
 * O(n^2)
 * */

const checkIsPalindrome = ((stack :string, palindromeMap: Map<String,boolean>): boolean => {
    if (stack.length === 1 || palindromeMap.has(stack)) return true;

    const halfPoint = stack.length / 2;
    for (let i = 0; i < halfPoint; i++) {
        if (stack.charAt(i) !== stack.charAt(stack.length - 1 - i)) return false;
    }
    return true;
});

const longestPalindrome = ((s: string): string => {
    let longestPalindrome = '';
    let count = 0;
    let palindromeMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let stack = ''; // not sure yet

        for (let j = i; j < s.length; j++) {
            stack += s[j];
            const palindrome = checkIsPalindrome(stack, palindromeMap);
            if (palindrome && stack.length > count) {
                palindromeMap.set(stack, true);
                count = stack.length;
                longestPalindrome = stack;
            }
        }
    }
    return longestPalindrome;
});

/**
 * Expand sliding window
 */
const isPalindromeExpand = ((s: string, i: number, isEven:boolean): string => {
    let j = i;
    if (isEven) {
        j++; 
        if (s[i] !== s[j]) return '';
    }
    let palindromeStr :string = isEven ? s[i] + s[j] : s[i];

    i--;
    j++;
    while ((i >= 0 || j < s.length) && s[i] === s[j]) {
        console.log(`s[i] ${s[i]} at ${i} --- s[j] ${s[j]} at ${j}`);
        palindromeStr = s[i] + palindromeStr + s[j];
        i--;
        j++;
    }
    return palindromeStr;
})

const longestPalindrome = ((s: string): string => {
    // boundary cases;
    if (s.length === 1) return s;
    if (s.length === 2) return s[0] === s[1] ? s : s[0];
    if (s.length === 3) {
        if (s[0] === s[2]) return s;
        if (s[0] === s[1]) return s.slice(0,2);
        if (s[1] === s[2]) return s.slice(1,3);
        return s[0];
    }

    // main cases
    const isEvenStr = s.length % 2 === 0;
    let finalPalindromeStr = '';

    for (let i = 0; i < s.length; i++) {
        const subStr = isPalindromeExpand(s, i, isEvenStr);
        console.log(`substring at ${i} is ${subStr}`);
        if (subStr.length > finalPalindromeStr.length) finalPalindromeStr = subStr;
    }
    return finalPalindromeStr;
});