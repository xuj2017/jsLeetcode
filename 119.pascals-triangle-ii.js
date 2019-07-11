/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr = [];
    for(var i = 0;i<rowIndex+1;i++){
        var item = [];
        for(var j = 0;j<=i;j++){
            if(j == 0 || j==i){
                item.push(1)
            }else{
                item.push(arr[i-1][j-1] + arr[i-1][j])
            }
        }
        arr.push(item)
    }

    return arr[rowIndex];
};

