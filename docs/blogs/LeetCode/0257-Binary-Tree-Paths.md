---
title: 257. Binary Tree Paths
description: leetcode 257. Binary Tree Paths
date: 2021-01-06
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
[LeetCode 0257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)

---
### Problem: <br/>

Given a binary tree, return all root-to-leaf paths.

**Note:** A leaf is a node with no children.


#### Example 1:
    Input:

      1
     /  \
    2    3
     \
      5

    Output: ["1->2->5", "1->3"]

    Explanation: All root-to-leaf paths are: 1->2->5, 1->3


---
### Solution: <br/>

DFS with backtracking can be used to solve this question. 

We define a DFS function first. The termination condition is when it is at the leaf node, and both child nodes are null. We add teh current path to the `ans`. In Python, we can save the path in the list and use `join` to convert it to a string, whereas in Java, StringBuilder object can be used to append and delete operations. The `toString` method can be used when we add the StringBuild to the `ans`. Then, we add the root node and arrow in the path and pass the current path to the right and left child nodes' recursion. If one path is complete, we should delete it before we enter another branch.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        res = []
        if not root: return res
        path = []
        self.getPath(root, path, res)
        return res
        
    def getPath(self, root: TreeNode, path: List[str], res: List[str]) -> None:
        path.append(str(root.val))
        if root.left: self.getPath(root.left, path, res)
        if root.right: self.getPath(root.right, path, res)
        if not root.left and not root.right:
            res.append("->".join(path))
        path.pop()
```

#### Java
```java
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> ans = new ArrayList<>();
        dfs(root, new StringBuilder(),ans);
        return ans;
    }
    private void dfs(TreeNode root, StringBuilder curr, List<String> ans){
        if(root == null) return;
        int n = curr.length();
        if(root.left == null && root.right == null){
            curr.append(root.val);
            ans.add(curr.toString());
        }
        curr.append(root.val);
        curr.append("->");
        dfs(root.left, curr, ans);
        dfs(root.right, curr, ans);
        curr.delete(n, curr.length());
    }
}
```

<Disqus shortname="patricksudo" />