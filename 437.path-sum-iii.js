/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    //https://blog.csdn.net/zjxxyz123/article/details/80070684
    //DFS
    if(!root){
        return 0;
    }
    let stack = [root];

    let res = 0;
    let line = 0;
    let pre = 0;
    while(stack.length){
        let item = stack.pop();
        res +=  item.val ;
        console.log(res)
        if(res === sum){
            line++;
            res = 0;
        }
        if(item.left){
            stack.push(item.left)
        }
        if(item.right){
            stack.push(item.right)
        }
        if(!item.left && !item.right){
            res = pre;
        }
        if(item.left && item.right){
            pre = item.val;
        }
    }
    return line
};
// @lc code=end

