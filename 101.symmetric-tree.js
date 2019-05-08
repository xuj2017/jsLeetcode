/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
    if(!root){
        return true;
    }

   return assist(root.left,root.right)

};

 function assist(left,right){
    if(!left && !right){
        return true;
    }

    if(!left || !right){
        return false;
    }

    if(left.val !== right.val){
        return false;
    }

     if(!assist(left.left,right.right) || !assist(left.right,right.left)){
        return false
     }

     return true
 }

