/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(!s){
        return 0;
    }
    s = s.split("");
    var ns = [...s];
    var qs = 0,os = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i] == "") continue;
        let lastIndex = s.lastIndexOf(s[i]);
        if(lastIndex === i){
            qs++
            s.splice(i,1,"")
        }else{
            os++;
            s.splice(i,1,"")
            s.splice(lastIndex,1,"")
        }
    }
    return qs ? os *2 +1 :os *2;
};
// @lc code=end

