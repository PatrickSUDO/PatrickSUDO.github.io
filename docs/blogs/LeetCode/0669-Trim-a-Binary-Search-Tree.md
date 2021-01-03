---
title: 669. Trim a Binary Search Tree
description: leetcode 669. Trim a Binary Search Tree
date: 2021-01-03
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree
categories:
  - LeetCode
---
[LeetCode 0669. Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/)

---
### Problem: <br/>

Given the `root` of a binary search tree and the lowest and highest boundaries as `low` and `high`, trim the tree so that all its elements lies in `[low, high]`. Trimming the tree should **not** change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a **unique answer**.

Return the `root` of the trimmed binary search tree. Note that the root may change depending on the given bounds.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/09/trim1.jpg" style="width: 450px; height: 126px;">

    Input: root = [1,0,2], low = 1, high = 2
    Output: [1,null,2]

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/09/trim2.jpg" style="width: 450px; height: 277px;">

    Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
    Output: [3,2,null,1]

#### Example 3:

    Input: root = [1], low = 1, high = 2
    Output: [1]

#### Example 4:

    Input: root = [1,null,2], low = 1, high = 3
    Output: [1,null,2]

#### Example 5:

    Input: root = [1,null,2], low = 2, high = 4
    Output: [2]

#### Note:

- The binary tree will have at most `200 nodes`.
- The value of each node will only be `0` or `1`.

---
### Solution: <br/>

We use the BST property: smaller in the left child and larger in the right child. There is no need to traverse in the pruning problem, and we can directly edit and prune the tree.  Four Conditions should be check:
1. If the root node is null:  return the same root.
2. If the root value < lower bound: the whole left child should be pruned. root = trim(root.right).
3. If the root value > upper bound: the whole right child should be pruned. root = trim(root.right).
4. If the root value is between both bounds: both children should trimed recursively.  root.left = trim(root.left); root.right = trim(root.right)

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def trimBST(self, root: TreeNode, L: int, R: int) -> TreeNode:
        if not root: return None
        if root.val < L:
            root= self.trimBST(root.right, L, R)
        elif root.val > R:
            root = self.trimBST(root.left, L, R)
        else:
            root.left = self.trimBST(root.left, L, R)
            root.right = self.trimBST(root.right, L, R)
        return root
```

#### Java
```java
class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if(root == null) return null;
        if(root.val > high) {
            root = trimBST(root.left, low, high);
        } else if (root.val < low) { 
            root = trimBST(root.right, low, high);
        } else {
            root.left = trimBST(root.left, low, high);
            root.right = trimBST(root.right, low, high);
        }
        return root;        
    }
}
```

<Disqus shortname="patricksudo" />