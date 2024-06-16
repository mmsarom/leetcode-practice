/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    if (s.length % 2 != 0) {
        return false;
    }

    const bracketMap = new Map();
    bracketMap.set('(', ')');
    bracketMap.set('[', ']');
    bracketMap.set('{', '}');

    let checkStack = [];
    let lastChar;
    checkStack.push(s[0]);
  
    for (let i = 1; i < s.length; i++) {
        
        if (checkStack.length == 0) {
            checkStack.push(s[i]);
            continue;
        } else {
            console.log(checkStack);
            console.log(checkStack.length);
            console.log('triggered1');
            lastChar = checkStack.pop();
            console.log(checkStack);
            console.log(checkStack.length);
        }
        if (bracketMap.get(lastChar) !== s.charAt(i)) {
            console.log('triggered2');
            checkStack.push(lastChar);
            checkStack.push(s[i]);
        }
    }

    console.log(checkStack);
    console.log(checkStack.length);
    if (checkStack.length == 0) {
        return true;
    } else {
        return false;
    }
};