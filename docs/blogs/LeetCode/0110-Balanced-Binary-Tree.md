---
title: 110. Balanced Binary Tree
description: leetcode 110. Balanced Binary Tree
date: 2021-01-02
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree
  - DFS
categories:
  - LeetCode
---
[LeetCode 0110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

---
### Problem: <br/>

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

>a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg" style="width: 342px; height: 221px;">

    Input: root = [3,9,20,null,null,15,7]
    Output: true

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg" style="width: 452px; height: 301px;">

    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

#### Example 3:
    Input: root = []
    Output: true

#### Constraints:

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-10<sup>4</sup> <= Node.val <= 10<sup>4</sup>`

---
### Solution: <br/>

We recursively check the height level by level in another helper function. The key is to use `-1` to represent the situation when an unbalanced tree occurred. When it starts to unbalance, we should stop the recursion because there is no chance it is balanced.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def check(root: TreeNode) -> int:
            if root == None: return 0
            l = check(root.left)
            r = check(root.right)
            if l == -1 or r == -1 or abs(l-r) > 1:
                return -1
            return 1 + max(l,r)
        return check(root) != -1
    
```

#### Java
```java
class Solution {
    public boolean isBalanced(TreeNode root) {
        if(root == null) return true;
        return getDepth(root) != -1;
    }
    private int getDepth(TreeNode root){
        if(root == null) return 0;
        
        int l = getDepth(root.left);
        if(l == -1) return -1;
        
        int r = getDepth(root.right);
        if(r == -1) return -1;
        
        if (Math.abs(l-r) > 1) return -1;
        
        return Math.max(l,r) + 1;
    }
}
```

<Disqus shortname="patricksudo" />