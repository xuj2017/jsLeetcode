/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(!n){
        return 0
    }
    let res = 0;
    for(let i =1;i<=n;i++){
        res += i;
        if(res === n){
            return i
        }
        if(res > n){
            return i-1
        }
    }
};
// @lc code=end

