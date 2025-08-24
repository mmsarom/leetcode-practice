const isPalindrome = ((x: number): boolean => {
    const stringX = x.toString();
    const middlePoint = Math.ceil(stringX.length / 2) - (stringX.length % 2 === 0 ? 0 : 1);

    for (let i = 0; i < middlePoint; i++) {
        if (stringX[i] !== stringX[stringX.length - 1 - i]) return false;
    }
    return true;
});