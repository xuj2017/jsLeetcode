/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
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
    for(var  i = 0;i<prices.length;i++){
        if(prices[i] < min){
            min = prices[i]
        }else if(prices[i]-min > max){
            max = prices[i]-min;
        }
    }
    return max;
};

