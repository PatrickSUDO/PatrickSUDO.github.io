---
title: 226. Invert Binary Tree
description: leetcode 226. Invert Binary Tree
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
[LeetCode 0226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

---
### Problem: 

Invert a binary tree.


#### Example 
Input:

         4
       /   \
      2     7
     / \   / \
    1   3 6   9

Output:

         4
       /   \
      7     2
     / \   / \
    9   6 3   1

---
### Solution:
It was a famous Twitter saying that the contributor of Homebrew was rejected by Google because he can't invert a binary in the coding interview. 

<a href="https://imgur.com/mupKxie"><img src="https://imgur.com/mupKxie.png" title="source: imgur.com" /></a>

Also, the AlgoExpert Ad. keep informing me I should know how to invert a binary tree, so I give a try, though the code is not optimized in my first submission. 

Ok, let's forget the anecdote and dive into the question. To solve this question, first you need to abstract the whole left and right child trees to segments. It is to simplify the problem. We can recursively explore the tree to the deepest , then swap the left and right child tree. Then, the recursion can finish the rest of them. 

Another important thing is remember the termination condition when you use recursion. Here, when there is no node or we are at the leaf node, the recursion should be stopped.

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
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root: return        
        root.right, root.left = self.invertTree(root.left), self.invertTree(root.right)
        return root
```
<Disqus shortname="patricksudo" />
