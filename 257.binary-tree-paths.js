/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root){
        return []
    }

    let res = [];

    helper(root,"")
    return res

    function helper(node,path){
        var isLeaf = true;
        if(node.left){
            isLeaf = false;
            helper(node.left,path+'->'+node.val)
        }
    
        if(node.right){
            isLeaf = false;
            helper(node.right,path+'->'+node.val)
        }
    
        if(isLeaf){
            var temp = path + '->' + node.val;
            res.push(temp.substring(2,temp.length))
        }
    }
    
};



