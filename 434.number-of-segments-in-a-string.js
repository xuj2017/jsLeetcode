/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim().replace(/(\s)+/g," ")
    if(s == " " || !s){
        return 0;
    }
    return s.split(" ").length
};
// @lc code=end

