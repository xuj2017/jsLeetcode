/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let maxLen = Math.max(num1.length,num2.length);
    num1 = num1.split("").reverse()
    num2 = num2.split("").reverse()
    let tag =0;
    let res = [];
    for(let i =0;i<maxLen;i++){
        let sum = (parseInt(num1[i]) || 0)+(parseInt(num2[i]) || 0)+tag;
        tag = 0;
        if(sum >= 10){
            sum -= 10;
            tag++
        }
        res.unshift(sum)
    }
    if(tag){
        res.unshift(tag)
    }
    return res.join("");
};
// @lc code=end

