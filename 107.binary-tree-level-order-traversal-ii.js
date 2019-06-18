/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var queue = [{node:root,level:0}],
        crt,
        stack = [],
        result = [],
        maxLevel;

    if(!root){
        return result;
    }

    while(queue.length > 0){
        crt = queue.shift();

        stack.push(crt);

        if(crt.node.right){
            queue.push({
                node:crt.node.right,
                level:crt.level + 1
            })
        }

        if(crt.node.left){
            queue.push({
                node:crt.node.left,
                level:crt.level + 1
            })
        }

        maxLevel = crt.level + 1
    }

    while(stack.length > 0){
        crt = stack.pop();
        if(crt.level < maxLevel){
            result.push([]);
            maxLevel --;
        }
        result[result.length - 1].push(crt.node.val);
    }

    return result;
    

};




