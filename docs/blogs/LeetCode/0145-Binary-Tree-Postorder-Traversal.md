---
title: 145. Binary Tree Postorder Traversal
description: leetcode 145. Binary Tree Postorder Traversal
date: 2021-1-1
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Linked List
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 0145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

---
### Problem: <br/>

Given the `root` of a binary tree, return the postorder traversal of its nodes' values.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg" style="width: 202px; height: 317px;">
    Input: root = [1,null,2,3]
    Output: [3,2,1]

#### Example 2:

    Input: root = []
    Output: []

#### Example 3:

    Input: root = [1]
    Output: [1]

#### Example 4:
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/pre3.jpg" style="width: 202px; height: 197px;">
    Input: root = [1,2]
    Output: [2,1]

#### Example 5:
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/pre2.jpg" style="width: 202px; height: 197px;">
    Input: root = [1,null,2]
    Output: [2,1]

#### Constraints:
- The number of the nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`.

#### Follow up:

Recursive solution is trivial, could you do it iteratively?

---
### Solution: <br/>

#### Recursive

We need a helper function to do it recursively. If the node is null, then break the recursion. We traverse the node according to the sequence left -> right -> root if those nodes are not null. Also, we add the value of the root node in the answer array after checking both children.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        def dfs(root):
            if not root:return
            if root.left: dfs(root.left) 
            if root.right: dfs(root.right)
            res.append(root.val)
        dfs(root)
        return res
```

#### Java
```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        dfs(root, ans);
        return ans;
    }
    private void dfs(TreeNode root, List<Integer> ans){
        if(root == null) return;
        if(root.left != null) dfs(root.left, ans);
        if(root.right != null) dfs(root.right, ans);      
        ans.add(root.val);
    }
}
```

#### Iterative

We can use the stack to simulate the recursion so that it can be done iteratively.
Using an iterative way, we should first push the child we want to visit last. Here, post-order can be done by sway the order left and right of the pre-order traversal and reverse the answer array at last. 

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>


#### Python
```python
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if not root: return []
        ans, stack = [], []
        curr = root
        stack.append(root)
        while stack:
            curr = stack.pop()
            ans.append(curr.val)
            if curr.left: stack.append(curr.left)
            if curr.right: stack.append(curr.right)
        return ans[::-1] 
```


#### Java
```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        if(root == null) return ans;
        Stack<TreeNode> s = new Stack<>();
        s.push(root);
        while(!s.empty()){
            TreeNode curr = s.pop();
            ans.add(curr.val);
            if(curr.left != null) s.push(curr.left);
            if(curr.right != null) s.push(curr.right);          
        }
        Collections.reverse(ans);
        return ans;
    }
}
```


<Disqus shortname="patricksudo" />