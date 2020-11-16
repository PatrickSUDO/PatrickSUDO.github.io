---
title: 94. Binary Tree Inorder Traversal
description: leetcode 94. Binary Tree Inorder Traversal
date: 2020-11-16
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Stack
  - Tree
categories:
  - LeetCode
---
[LeetCode 0094. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

---
### Problem: <br/>

Given the root of a binary tree, return the inorder traversal of its nodes' values.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="width: 202px; height: 324px;">

    Input: root = [1,null,2,3]
    Output: [1,3,2]

#### Example 2:

    Input: root = []
    Output: []

#### Example 3:

    Input: root = [1]
    Output: [1]

#### Example 4:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg" style="width: 202px; height: 202px;">

    Input: root = [1]
    Output: [1]

#### Example 5:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg" style="width: 202px; height: 202px;">

    Input: root = [1,null,2]
    Output: [1,2]


#### Constraints:

- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

#### Follow up:

Recursive solution is trivial, could you do it iteratively?

---
### Solution: <br/>
In order means we visit the left child first, then the current node itself, and finally the right child. We recursively use DFS to traverse all the nodes. We need a help function. The termination condition must be described before we enter into the recursion. If the node is null, we can skip this node. Next, we follow the rule mentioned previously to enter each recursion sequentially and add the node in the list, which will be returned as an answer.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ if it's worst case, it can be $O(log n)$ in average cases.
</br>
</br>

#### Java
```java
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        dfs(root, ans);
        return ans;
    }
    private void dfs(TreeNode root, List<Integer> ans){
        if(root == null) return;
        if(root.left != null) dfs(root.left, ans); 
        ans.add(root.val);
        if(root.right != null) dfs(root.right, ans);
    }
```
#### Python
```python
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        self.res = list()
        def dfs(root):
            if not root: return None
            if root.left: dfs(root.left)
            self.res.append(root.val)
            if root.right: dfs(root.right)
        dfs(root)         
        return self.res
```
<Disqus shortname="patricksudo" />