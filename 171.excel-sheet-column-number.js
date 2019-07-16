/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s = s.split("").reverse().join("");
    var res = 0;
    for(var i = 0;i<s.length;i++){
        res += (s.charCodeAt(i)-64)*Math.pow(26,i)
    }
    return res
};

