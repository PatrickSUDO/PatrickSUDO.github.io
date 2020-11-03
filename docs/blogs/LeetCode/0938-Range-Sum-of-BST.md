---
title: 0938. Range Sum of BST
date: 2020-10-03
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree
categories:
  - LeetCode
---
[LeetCode 0938. Range Sum of BST](https://leetcode.com/problems/invert-binary-tree/)

---
### Problem: 

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.


#### Example 1:

    Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
    Output: 32

#### Example 2:

    Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
    Output: 23

#### Note:

1. The number of nodes in the tree is at most 10000.
2. The final answer is guaranteed to be less than 2^31.

---
### Solution:
When you see the BST, it means we can use the property of the left child tree is smaller than the root, while the right child tree is bigger. Also, you can consider use in-order traversal to explore the tree in a sorted sequence. Here we can for sure, use in-order traversal to sort the tree and sum the elements in the range, but it cost additional memory. Besides, if the child tree is not in the specified range, we don't need to explore it. It can be a pruning which makes it more efficient. Again, we recursively traverse the BST, if the left child tree is too small, then we can consider only the right child tree, and vice versa. Then, we just recursively add the value of each node into ans.

Time complexity: $O(n)$ </br>
Space complexity: $O(n)$
</br>
</br>

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
        if not root: return 0
        if root.val < L:
            return self.rangeSumBST(root.right, L, R)
        if root.val > R:
            return self.rangeSumBST(root.left, L, R)
        return root.val + self.rangeSumBST(root.left, L, R) + self.rangeSumBST(root.right, L, R)
```
<Disqus shortname="patricksudo" />
