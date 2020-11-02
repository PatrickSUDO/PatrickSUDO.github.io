---
title: 1192. Critical Connections in a Network
date: 2020-09-14
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - DFS
categories:
  - LeetCode
---
[1192. Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

---
**Problem:** <br/>
There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

 
Example 1:

<img alt="" src="https://assets.leetcode.com/uploads/2019/09/03/1537_ex1_2.png" style="width: 198px; height: 248px;">

Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]

Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
 

Constraints:
1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.

---
**Solution:** <br/>
To find the edge that can divide the graph by cutting off, this edge cannot have a ring because cutting any edge in the ring will not divide the graph into two. Then how do we traverse once to find the ring? we can start from 0 as the starting point, and record the minimum steps from the starting point to that point each time. Thus, if there is no ring we encounter the next point, the steps it returns will be larger than that of its parent node. If it is smaller or equal, it means that there is another way to go from the starting point, which means there is a loop.

So after creating the graph, first establish the minimum number of steps for the starting point. If the child node is equal to the parent node, it means going back and should be ignored. If the state is -1, it means that we have not visited. Then go back to the inner DFS to find if there is a loop, and update the minimum number of steps to the states. If the point is visited, then update the smaller steps. Finally, check whether steps recorded in the node status has changed after the visiting. If there is no change, it means that there is no ring parent node and the current edge is critical.

At the beginning, the parent node of 0 is dummy -1
<a href="https://imgur.com/mhjOzqQ"><img src="https://i.imgur.com/mhjOzqQ.png" title="source: imgur.com" /></a>

Time $O(n)$ </br>
Space $O(n)$


```python
class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        graph = collections.defaultdict(list)
        for i, j in connections:
            graph[i].append(j)
            graph[j].append(i)
        ans = []
        states = [-1] * n
        
        #Start from 0, if we find the step is smaller or equal to the minimum step, it means ring exist.
        def dfs(curr, parents, steps):            
            states[curr] = steps + 1 #Min step now            
            for child in graph[curr]:
                if child == parents: continue #go back and forth
                elif states[child] == -1: #haven't vistied
                    states[curr] = min(states[curr], dfs(child, curr, steps + 1))
                else: #if we find smaller step, update it
                    states[curr] = min(states[curr], states[child])
            
            #Check if the step changes, but 0 which is the starting point should be excluded
            if states[curr] == steps + 1 and curr != 0:
                ans.append([parents, curr])
            return states[curr]
        
        dfs(0, -1, 0)
        return ans
```
<Disqus shortname="patricksudo" />
