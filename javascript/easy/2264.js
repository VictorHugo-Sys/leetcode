// 2264. Largest 3-Same-Digit Number in String

// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let good = "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            let answer = num.substring(i, i+3);
            if (answer > good) {
                good = answer;
            }
        }
    }
    return good;     
};