/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    
    let result = [];

    let count = function(n){
        let res = 0;
        while(n){
            n = n&(n-1);
            res++;
        }
        return res
    }

    for(let i = 0;i<12;i++){
        for(let j = 0;j<60;j++){
            if(count(i)+count(j) === num){
                result.push(`${i}:${j<10?"0"+j:j}`)
            }
        }
    }
    return result
};
// @lc code=end

