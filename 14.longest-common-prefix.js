/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.06%)
 * Total Accepted:    417.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!Array.isArray(strs)){
        return;
    }

    if( strs.length === 0){
        return "";
    }

    if(strs.length === 1){
        return strs[0]
    }

    var _tar = strs[0];
    var result ="";
    for(var i = 0;i<_tar.length;i++){
        var item = _tar[i];
        var flag = true;
        strs.forEach(v=>{
            if(v[i] != item){
                flag = false;
            }
        })
        if(flag){
            result += item;
        }else{
            break;
        }
    }
    return result;
};

