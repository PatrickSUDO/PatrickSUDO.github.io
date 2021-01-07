---
title: 687. Longest Univalue Path
description: leetcode 687. Longest Univalue Path    
date: 2021-01-07
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
categories:
  - LeetCode
---
[LeetCode 0687. Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/)

---
### Problem: <br/>

Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

**The length of the path** between two nodes is represented by the number of edges between them.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/ex1.jpg" style="width: 571px; height: 302px;">
    Input: root = [5,4,5,1,1,5]
    Output: 2   

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/ex2.jpg" style="width: 571px; height: 302px;">
    Input: root = [1,4,5,4,4,5]
    Output: 2

#### Constraints:
- The number of nodes in the tree is in the range `[0, 10<sup>4</sup>]`.
- `-1000 <= Node.val <= 1000`
- The depth of the tree will not exceed `1000`.

---
### Solution: <br/>

We can still use DFS to find the largest path of the current root. This function return the max path length that passes root and at most one of its child. We check if the root is null, then the path should return 0 if the root node is null. Then, we start from both right and left child to find its maximum path length. If the value of child node is equal to the root node, the path length we get is valid, otherwise it should be 0. Next, we compared the sum of two sides to the current `ans` which is the longest path currently. The return value should only contain the child with longer path.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def longestUnivaluePath(self, root: TreeNode) -> int:
        self.ans = 0
        self.path(root)
        return self.ans 
    def path(self, root):
        if not root: return 0
        l = self.path(root.left) 
        r = self.path(root.right) 
        pathLeft = l + 1 if root.left and root.left.val == root.val else 0
        pathRight = r + 1 if root.right and root.right.val == root.val else 0
        self.ans= max(self.ans, pathLeft + pathRight)
        return max(pathLeft, pathRight)
```


#### Java
```java
class Solution {
    int ans = 0;
    public int longestUnivaluePath(TreeNode root) {
        if(root == null) return 0;
        dfs(root);
        return ans;
    }
    private int dfs(TreeNode root){
        if(root == null) return 0;
        int l = dfs(root.left);
        int r = dfs(root.right);
        int pathLeft = 0;
        int pathRight = 0;
        if (root.left != null && root.val == root.left.val) pathLeft = l + 1;
        if (root.right != null && root.val == root.right.val) pathRight = r + 1;
        ans = Math.max(ans, pathLeft + pathRight);
        return Math.max(pathLeft, pathRight);
    }
}
```

<Disqus shortname="patricksudo" />