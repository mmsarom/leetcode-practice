/**
 * @param {string} s
 * @return {number}
 */
/* JS version to refactor to TS
var lengthOfLongestSubstring = function(s) {
    let slen = s.length;
    let max = 0;
    
    for (let i = 0; i < slen; i++) {
        let newStr = s.charAt(i);
        let count = 1;
        for (let j = i + 1; j < slen; j++) {
            var nextChar = s.charAt(j);

            if (!(newStr.includes(nextChar))) {
                count++;
                newStr += nextChar;
                //console.log(`curr Str: ${newStr}, next char ${nextChar}, count: ${count}`)
            } else {
                break;
            }
        }
        max = count > max ? count : max;
    }
    return max;
};
*/
