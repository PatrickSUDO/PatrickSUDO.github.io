---
title: 112. Path Sum
description: leetcode 112. Path Sum
date: 2021-01-03
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
[LeetCode 0112. Path Sum](https://leetcode.com/problems/path-sum/)

---
### Problem: <br/>

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Note**: A leaf is a node with no children.

#### Example :
Given the below binary tree and `sum = 22`,

          5
         / \
        4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1

return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

---
### Solution: <br/>

If the root node is null, then return false. If this node is the leaf node, we check if its value is equal to the remaining sum. Next, we check both the right and left children. If the sum of one child equivalent to the sum, the function should return true.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if not root: return 
        if not root.left and not root.right: return root.val == sum
        sum -= root.val
        return self.hasPathSum(root.left, sum) or self.hasPathSum(root.right, sum)
```

#### Java
```java
class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if(root == null) return false;
        if(root.left == null && root.right == null) return root.val==sum;
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);      
    }
}
```

<Disqus shortname="patricksudo" />