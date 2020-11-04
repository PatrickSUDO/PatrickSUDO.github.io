---
title: 617. Merge Two Binary Trees
description: leetcode 617. Merge Two Binary Trees
date: 2020-11-04
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree
categories:
  - LeetCode
---
[LeetCode 0617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)

---
### Problem: <br/>

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

#### Example 1:

    Input: 
        Tree 1                     Tree 2                  
             1                         2                             
            / \                       / \                            
           3   2                     1   3                        
          /                           \   \                      
         5                             4   7                  
    Output: 
    Merged tree:
            3
           / \
          4   5
         / \   \ 
        5   4   7



#### Note: 
The merging process must start from the root nodes of both trees.


---
### Solution: <br/>
In the tree, we can solve most of the easy problems recursively. That's a good starting point for this question. We handle the case when both nodes are null first. If one node is null, then we return the other one. If both nodes are not null, we do summation to their value. Finally, enter the next recursion to both the right and left child node.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def mergeTrees(self, t1: TreeNode, t2: TreeNode) -> TreeNode:
        if not t1 and not t2: return None
        if not t1 or not t2: return t1 or t2
        t1.val += t2.val
        t1.left = self.mergeTrees(t1.left, t2.left)
        t1.right = self.mergeTrees(t1.right, t2.right)
        return t1
```

#### Java
```java
class Solution {
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if (t1 == null && t2 == null){
            return null;
        }
        if (t1 == null || t2 == null){
            return (t1 != null) ? t1 : t2;
        }
        t1.val += t2.val;
        t1.left = mergeTrees(t1.left, t2.left);
        t1.right = mergeTrees(t1.right, t2.right);
        return t1;
    }
}
```
<Disqus shortname="patricksudo" />