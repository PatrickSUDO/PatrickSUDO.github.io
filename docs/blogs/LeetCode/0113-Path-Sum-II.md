---
title: 113. Path Sum II
description: leetcode 113. Path Sum II
date: 2021-01-04
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
[LeetCode 0113. Path Sum II](https://leetcode.com/problems/path-sum-ii/)

---
### Problem: <br/>

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

**Note:** A leaf is a node with no children.

#### Example:
Given the below binary tree and sum = 22,

          5
         / \
        4   8
       /   / \
      11  13  4
     /  \    / \
    7    2  5   1

Return:
    [
    [5,4,11,2],
    [5,8,4,5]
    ]

---
### Solution: <br/>

This binary tree path sum needs to find the path based on the previous question **112. Path Sum**, but the basic idea is the same. We still need to use DFS and backtracking, but the data structure is two-dimensional ArrayList, and every time DFS searches for a new node, the node must be saved. Also, every time a path is found, the path saved as a 1D ArrayList is saved to the final answer. Moreover, whenever DFS searches for a child node and considers that it is not a path sum, we return to the previous state. The node added currently needs to be removed from the ArrayList. Remember to deep-copy the array to fill in the answer, or the backtracking may affect the answer.


Time complexity: $O(n＾2)$</br> because we need iterate every node, and we need $O(n)$ to copy the arrays.
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        curr, ans = [], []
        self.dfs(root, sum, curr, ans)
        return ans
    
    def dfs(self, root, target, curr, ans):
        if not root: return
        curr.append(root.val)
        if sum(curr) == target and not root.left and not root.right:
            ans.append(curr[:])
            return 
        if root.left: 
            self.dfs(root.left, target, curr[:], ans)
        if root.right: 
            self.dfs(root.right, target, curr[:], ans)
        curr.pop() 
    
```

#### Java
```java
class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> ans = new ArrayList<List<Integer>>();
        if (root == null) return ans;
        dfs(root, new ArrayList<Integer>(), ans, sum);
        return ans;
    }
    private void dfs(TreeNode root, List<Integer> curr, List<List<Integer>> ans, int sum){
        curr.add(root.val);
        if(root.val == sum && root.left == null && root.right == null){
            ans.add(new ArrayList<>(curr));
            return;
        }
        if(root.left != null) {
            dfs(root.left, curr, ans, sum - root.val);
            curr.remove(curr.size() - 1);
            
        }
        if(root.right != null) {
            dfs(root.right, curr, ans, sum - root.val);
            curr.remove(curr.size() - 1);
        }        
    }
}
```

<Disqus shortname="patricksudo" />