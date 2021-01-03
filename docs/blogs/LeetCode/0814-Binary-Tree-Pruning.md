---
title: 814. Binary Tree Pruning
description: leetcode 814. Binary Tree Pruning
date: 2021-01-03
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
categories:
  - LeetCode
---
[LeetCode 0814. Binary Tree Pruning](https://leetcode.com/problems/binary-tree-pruning/)

---
### Problem: <br/>

We are given the head node **root** of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

#### Example 1:

    Example 1:
    Input: [1,null,0,0,1]
    Output: [1,null,0,null,1]
 
    Explanation: 
    Only the red nodes satisfy the property "every subtree not containing a 1".
    The diagram on the right represents the answer.

<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png" style="width:450px">


#### Example 2:

    Example 2:
    Input: [1,0,1,0,0,0,1]
    Output: [1,null,1,null,1]

<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png" style="width:450px">

#### Example 3:

    Example 3:
    Input: [1,1,0,1,1,0,1,0]
    Output: [1,1,0,1,1,null,1]

<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png" style="width:450px">


#### Note:

- The binary tree will have at most `200 nodes`.
- The value of each node will only be `0` or `1`.

---
### Solution: <br/>

We use post-order traversal to check each node. First, check the left subtree and the right subtree, and then check the root node.
As long as one of them is not zero, no pruning is needed!
The step of determining the root node is a leaf node with value 1 should be placed after the left and right subtrees are checked.  From Example 2, after pruning both the left and right nodes with 0 values, we must check whether the root node is 0 or not and then prune itself. The step is equivalent to post-order traversal after recursively traverse all the children and then check itself.


Time complexity: $O(n)$</br>
Space complexity: $O(h)$ 
</br>
</br>

#### Python
```python
class Solution:
    def pruneTree(self, root: TreeNode) -> TreeNode:
        if not root: return root
        root.left = self.pruneTree(root.left)
        root.right = self.pruneTree(root.right)
        return root if root.val == 1 or root.left or root.right else None
```

#### Java
```java
class Solution {
    public TreeNode pruneTree(TreeNode root) {
        if(root == null) return root;
        root.left = pruneTree(root.left);
        root.right = pruneTree(root.right);
        return (root.val==1 || root.left!=null || root.right!=null) ? root: null;
    }
}
```

<Disqus shortname="patricksudo" />