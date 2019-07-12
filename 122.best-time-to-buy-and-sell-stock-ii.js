/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices.length){
        return 0;
    }
    var min = prices[0];
    var max = 0;
    var res = max;
    for(var i = 0;i<prices.length;i++){
        if(min > prices[i] && max === 0){
            min = prices[i];
        }else if(prices[i]-min > max){
            max = prices[i]-min
        }else if(prices[i]-min < max){
            res += max;
            min = prices[i];
            max = 0;
        }
    }
    if(max){
        res += max;
    }
    return res;
};

