/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!q && !p){
        return true
    }

    if(!q || !p){
        return false;
    }

    if(p.val === q.val){
        let leftSame = isSameTree(p.left,q.left);
        let rightSame = isSameTree(p.right,q.right);

        return leftSame && rightSame
    }else{
        return false;
    }
};

