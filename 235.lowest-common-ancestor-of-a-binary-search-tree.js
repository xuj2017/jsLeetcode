/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

// 节点 N 左子树上的所有节点的值都小于等于节点 N 的值
// 节点 N 右子树上的所有节点的值都大于等于节点 N 的值
// 左子树和右子树也都是 BST
    var rootVal = root.val;
    var pVal = p.val;
    var qVal = q.val;

    if(pVal > rootVal && qVal > rootVal){
       return lowestCommonAncestor(root.right,p,q)
    }else if(pVal < rootVal && qVal < rootVal){
        return lowestCommonAncestor(root.left,p,q)
    }else{
        return root;
    }
};

