---
title: 236. Lowest Common Ancestor of a Binary Tree
description: leetcode 236. Lowest Common Ancestor of a Binary Tree
date: 2021-01-06
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
categories:
  - LeetCode
---
[LeetCode 0236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

---
### Problem: <br/>


Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a **node to be a descendant of itself).**

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;">
    Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
    Output: 3
    Explanation: The LCA of nodes 5 and 1 is 3.

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;">
    Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
    Output: 5
    Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

#### Example 3:
    Input: root = [1,2], p = 1, q = 2
    Output: 1


#### Constraints:
- The number of nodes in the tree is in the range `[2, 105]`.
- `-109 <= Node.val <= 109`
- All `Node.val` are unique.
- `p != q`
- `p` and `q` will exist in the tree.
---
### Solution 1: <br/>

The definition of the lowest common ancestor is the node closest to the leaf we can find in a binary tree, which is the ancestor node of both p and q. **Note that if p or q itself can also be its ancestor. **

If you use recursion, the most important thing is to understand what the recursive function does. The function of the lowestCommonAncestor(root, p, q) in this question is to determine the lowest common ancestor of p and q in the root tree, and the return value is the common ancestor.

If the current node is equal to p or q, then the node is found and return. Otherwise, the left and right subtrees are searched separately.

The common ancestor of p and q in the left and right subtrees is found. Note that the ancestor can be the node itself. Then make further checks based on the nodes found on the left and right.

If the search results on the left and right sides are not empty, indicating that p and q have been found, respectively.  LCA is the current node. Otherwise, the return node is left, or the right child, which is not null.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root == p or root == q: return root
        l = self.lowestCommonAncestor(root.left, p, q)
        r = self.lowestCommonAncestor(root.right, p, q)
        if not l or not r: return l if l else r
        return root
```

#### Java
```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null) return null;
        if(root.equals(p) || root.equals(q)) return root;
        TreeNode l = lowestCommonAncestor(root.left, p, q);
        TreeNode r = lowestCommonAncestor(root.right, p, q);
        if(l == null) return r;
        if(r == null) return l;
        return root;
    }
}
```


<Disqus shortname="patricksudo" />