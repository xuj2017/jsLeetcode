/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0){
        return []
    }
    if(numRows == 1){
        return [[1]]
    }

    if(numRows == 2){
        return [[1],[1,1]]
    }

    var res = [[1],[1,1]];

    for(var i = 2;i<numRows;i++){
        var prev = res[i-1];
        var item = [1];
        for(var j = 1;j<i;j++){
            item.push(prev[j-1]+prev[j]);
        }
        item.push(1)
        res.push(item)
    }
    return res;
};

