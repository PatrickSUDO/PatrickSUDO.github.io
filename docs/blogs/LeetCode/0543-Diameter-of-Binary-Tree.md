---
title: 543. Diameter of Binary Tree
description: leetcode 508. Most Frequent Subtree Sum    
date: 2021-01-07
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree
categories:
  - LeetCode
---
[LeetCode 0508. Most Frequent Subtree Sum](https://leetcode.com/problems/most-frequent-subtree-sum/)

---
### Problem: <br/>

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the **longest** path between any two nodes in a tree. This path may or may not pass through the root.


#### Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    

Return **3**, which is the length of the path [4,2,1,3] or [5,2,1,3].

**Note:** The length of path between two nodes is represented by the number of edges between them.

---
### Solution: <br/>

Binary tree's diameter is the length of the longest path between any two nodes in a tree. So we can still use DFS to find the largest diameter of the current root. This function return the max path length that passes root and at most one of its child. We check if the root is null, then the diameter should return -1 since we have already added the diameter before passing the root. Next, we compared the sum of two sides to the current `ans` which is the longest path currently. The return value should only contain the child with longer path.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        self.ans = 0
        self.LongestPath(root)
        return self.ans
    
    def LongestPath(self, root):
        if not root: return -1
        l = 1 + self.LongestPath(root.left)
        r = 1 + self.LongestPath(root.right)
        self.ans = max(self.ans, l + r)
        return max(l,r)
```


#### Java
```java
class Solution {
    int ans = 0;
    public int diameterOfBinaryTree(TreeNode root) {   
        dfs(root);
        return ans;
    }
    private int dfs(TreeNode root){
        if(root == null) return -1;
        int l = 1 + dfs(root.left);
        int r = 1 + dfs(root.right);
        ans = Math.max(ans,l + r);
        return Math.max(l, r);
    }
}
```

<Disqus shortname="patricksudo" />