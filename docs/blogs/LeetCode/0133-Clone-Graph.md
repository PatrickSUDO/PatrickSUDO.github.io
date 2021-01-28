---
title: 133. Clone Graph
description: leetcode 133. Clone Graph
date: 2021-01-28
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Graph
  - DFS
  - BFS
categories:
  - LeetCode
---
[LeetCode 0133. Clone Graph](https://leetcode.com/problems/clone-graph/)

---
### Problem: <br/>

Given a reference of a node in a **connected** undirected graph.

Return a **deep copy** (clone) of the graph.

Each node in the graph contains a val (`int`) and a list (`List[Node]`) of its neighbors.

    class Node {
        public int val;
        public List<Node> neighbors;
    }
 

**Test case format**:

For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with `val = 1`, the second node with `val = 2`, and so on. The graph is represented in the test case using an adjacency list.

**Adjacency list** is a collection of unordered **lists** used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with `val = 1`. You must return the **copy of the given node** as a reference to the cloned graph.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png" style="width: 500px; height: 550px;">

    Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
    Output: [[2,4],[1,3],[2,4],[1,3]]
    Explanation: There are 4 nodes in the graph.
    1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
    2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
    3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
    4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/07/graph.png" style="width: 163px; height: 148px;">

    Input: adjList = [[]]
    Output: [[]]
    Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

#### Example 3:

    Input: adjList = []
    Output: []
    Explanation: This an empty graph, it does not have any nodes.

#### Example 4:
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/07/graph-1.png" style="width: 272px; height: 133px;">

    Input: adjList = [[2],[1]]
    Output: [[2],[1]]

#### Constraints:

- 1 <= Node.val <= 100
- `Node.val` is unique for each node.
- Number of Nodes will not exceed 100.
- There is no repeated edges and no self-loops in the graph.
- The Graph is connected and all nodes can be visited starting from the given node.

---
### Solution: <br/>

We use the hash table to map the old node and the new node. Also, the node's neighbors should be copied. We use DFS recursively to traverse the whole graph. If the node we haven't visited before, we construct a new node. We put the old node as the key with the new-built node as the value. Then, we copy the neighbor. The neighbors are traversed and add in the adjacent list of the current node. Be careful, and the added node must pass into the recursion, too. Otherwise, only the reference will be copied.

Time complexity: $O(V+E)$</br>
Space complexity: $O(V+E)$ 
</br>
</br>

#### Python
```python
class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node: return node
        self.visited = {}
        ans = self.dfs(node) 
        return ans        
    def dfs(self, node):
        if not node: return
        if node in self.visited: return self.visited[node]
        newNode = Node(node.val, [])
        self.visited[node] = newNode
        for n in node.neighbors:
            newNode.neighbors.append(self.dfs(n))
        return newNode
```

#### Java
```java
class Solution {
    Map<Node, Node> visted = new HashMap<>();
    public Node cloneGraph(Node node) {
        Node ans = dfs(node);
        return ans;
    }
    private Node dfs(Node node){
        if(node == null) return null;
        if(visted.containsKey(node)) return visted.get(node);
        Node newNode = new Node(node.val, new ArrayList<>());
        visted.put(node, newNode);
        for(Node neighbor: node.neighbors){
            newNode.neighbors.add(dfs(neighbor));
        }
        return newNode;
    }
}
```


<Disqus shortname="patricksudo" />