/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(!numbers.length){
        return []
    }
    var res = [];
    for(var i = 0;i<numbers.length;i++){
        var mix = target-numbers[i];
        if(mix <0){
            return res;
        }

        var index = numbers.lastIndexOf(mix)
        if(index > i){
            res = [++ i,++index]
            return res
        }
    }

    return res;
};

