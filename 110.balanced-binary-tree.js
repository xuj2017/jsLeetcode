/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var maxDepth = function(root) {
    if(!root){
        return 0
    }
    return 1+ Math.max(maxDepth(root.left),maxDepth(root.right)) ;
};

var isBalanced = function(root) {
    if(!root){
        return true;
    }

    var leftLen = maxDepth(root.left);
    var rightLen = maxDepth(root.right);
    if(Math.abs(rightLen-leftLen) > 1){
        return false
    }

    return isBalanced(root.left) && isBalanced(root.right)
};

