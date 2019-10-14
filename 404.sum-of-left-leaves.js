/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;

    if(root.left != null && root.left.right == null && root.left.left == null){
        return sumOfLeftLeaves(root.right) + root.left.val
    }
    return sumOfLeftLeaves(root.right) + sumOfLeftLeaves(root.left)



};
// @lc code=end

