/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
        return null;
    }

    // let right = invertTree(root.right)
    // let left = invertTree(root.left)

    // root.left = right;
    // root.right = left;
    // return root;

    let queue = [root];

    while(queue.length){
        let r = queue.pop();
        let temp = r.left;
        r.left = r.right;
        r.right = temp;
        if(r.left) queue.push(r.left)
        if(r.right) queue.push(r.right)
    }

    return root;
};

