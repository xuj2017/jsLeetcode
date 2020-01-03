/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 let arr = [];
 let res = 0;

 for(let i = 0;i<s.length;){
     let cur = s.charAt(i);

     if(arr.indexOf(cur)=== -1){
         arr.push(cur)
     }else{
        arr.shift();
        continue;
     }
     res =Math.max(res,arr.length);
     i++
 }

 return res
};
// @lc code=end

