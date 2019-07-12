/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s || s.length <=1){
        return true;
    }

    s = s.toLowerCase().replace(/\W/g,"");
    return s === s.split("").reverse().join("");
}

