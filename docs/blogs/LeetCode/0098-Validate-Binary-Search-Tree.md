---
title: 98. Validate Binary Search Tree
description: leetcode 98. Validate Binary Search Tree
date: 2021-01-26
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree 
  - DFS
categories:
  - LeetCode
---
[LeetCode 98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

---
**Problem:** <br/>

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A **valid BST** is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" style="width: 302px; height: 182px;">

    Input: root = [2,1,3]
    Output: true

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" style="width: 422px; height: 292px;">

    Input: s = "aa", k = 1
    Output: 2
    Explanation: The substring is "aa" with length 2.


#### Constraints:

- The number of nodes in the tree is in the range [1, 10<sup>4</sup>].
- -2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1

---
**Solution:** <br/>

One of the essential properties of BST is if it traverses in an in-order way, it will be sorted ascendingly. Therefore, we can check if it is in ascendingly order using in-order traversal. A `prev` node needs to be recorded. We assign this variable with null at first. When the `root` is null, then return true. Then, we go along the left child first, recursively. Then, if the current node value is smaller than `prev` value, return false. Next, we set the `root` as `prev`, and traverse the right child recursively to see if the right child has the same property.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>


#### Python
```python
class Solution:
    def __init__(self):
        self.last = None
    def isValidBST(self, root: TreeNode) -> bool:
        if not root: return True
        if not self.isValidBST(root.left): return False
        if self.last and root.val <= self.last.val: return False
        self.last = root
        return self.isValidBST(root.right)
```


#### Java
```java
class Solution {
    public TreeNode prev = null;
    public boolean isValidBST(TreeNode root) {
        if(root == null) return true;
        if(!isValidBST(root.left)) return false;
        if(prev != null && root.val <= prev.val) return false;
        prev = root;
        return isValidBST(root.right);      
    }
}
```

<Disqus shortname="patricksudo" />