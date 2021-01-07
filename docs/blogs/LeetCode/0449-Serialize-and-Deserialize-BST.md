---
title: 449. Serialize and Deserialize BST
description: leetcode 449. Serialize and Deserialize BST
date: 2021-01-06
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
categories:
  - LeetCode
---
[LeetCode 0449. Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/)

---
### Problem: <br/>

Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a **binary search tree**. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

**The encoded string should be as compact as possible.**


#### Example 1:
    Input: root = [2,1,3]
    Output: [2,1,3]

#### Example 1:
    Input: root = []
    Output: []

#### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
- 0 <= Node.val <= 10<sup>4</sup>
- The input tree is **guaranteed** to be a binary search tree.

---
### Solution: <br/>

This question adopts the pre-order traversal method so that the first array obtained by traversal is the root node of the BST, and the element after the root node is the left child, which is smaller than the root node. The right child is larger than the root node.

Therefore, the critical conclusion: **BST pre-order traversal can uniquely determine a BST**

Encoding is using the pre-order traversal with DFS.
The decoding process is operated through a queue.  We keep polling the element from the line and checking if its value is between the current tree's maximum and minimum values. If it is out of the range, this node is not a part of the subtree.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Codec:
    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        vals = []
        def preOrder(root):
            if root:
                vals.append(root.val)
                preOrder(root.left)
                preOrder(root.right)
        preOrder(root)
        return ' '.join(map(str, vals))
    
    from collections import deque
    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        vals = deque(int(val) for val in data.split())
        def build(minVal, maxVal):
            if vals and minVal < vals[0] < maxVal:
                val = vals.popleft()
                root = TreeNode(val)
                root.left = build(minVal, val)
                root.right = build(val, maxVal)
                return root
            
        return build(float('-inf'), float('inf'))
```

#### Java

`StringBuilder` can be used to concatenate incoming value as string, while  the method `split` can be used to eliminate the symbol used for separation.

```java
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder ans = new StringBuilder();
        dfs(root, ans);
        return ans.toString();
    }
    
    private void dfs(TreeNode root, StringBuilder ans){
        if(root == null) return;
        ans.append(root.val).append(" ");
        dfs(root.left, ans);
        dfs(root.right, ans);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if(data.isEmpty()) return null;
        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(" ")));
        return build(Integer.MIN_VALUE, Integer.MAX_VALUE, q);

    }
    private TreeNode build(int minVal, int maxVal, Queue<String> q){
        if(q.isEmpty()) return null;
        int val = Integer.parseInt(q.peek());
        if(val< minVal || val > maxVal) return null;
        q.poll();
        TreeNode root = new TreeNode(val);
        root.left = build(minVal, val, q);
        root.right = build(val, maxVal, q);
        return root;
    }
}
```

<Disqus shortname="patricksudo" />