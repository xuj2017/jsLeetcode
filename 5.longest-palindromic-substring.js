/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.65%)
 * Total Accepted:    490.1K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(!s){
        return '';
    }
    var res = s.substr(0,1)
    for (var i = 0; i < s.length; i++) {
        for(j = s.length -1;j>i;j--){
            if (s[j] == s[i] && j -i > res.length -1) {
                var b = s.substring(i, j + 1);
                var newB = b.split('').reverse().join('');
                if (newB === b && b.length > res.length) {
                    res = b
                }
            }
        }
        
    }

    return res;
};
