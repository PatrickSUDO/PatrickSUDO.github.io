---
title: 815. Bus Routes
description: leetcode 815. Bus Routes
date: 2021-02-08
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - BFS
categories:
  - LeetCode
---
[LeetCode 815. Bus Routes](https://leetcode.com/problems/bus-routes/)

---
### Problem: <br/>

You are given an array `routes` representing bus routes where `routes[i]` is a bus route that the `ith` bus repeats forever.

For example, if `routes[0] = [1, 5, 7]`, this means that the `0th` bus travels in the sequence `1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...` forever.
You will start at the bus stop `source` (You are not on any bus initially), and you want to go to the bus stop `target`. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from `source` to `target`. Return `-1` if it is not possible.

#### Example 1:

    Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
    Output: 2
    Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

#### Example 2:

    Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
    Output: -1



#### Constraints:

- 1 <= routes.length <= 500.
- 1 <= routes[i].length <= 105
- All the values of routes[i] are **unique**.
- sum(routes[i].length) <= 105
- 0 <= routes[i][j] < 106
- 0 <= source, target < 106

---
#### Solution: </br>

We treat a bus route is a connected component, and don't use the conventional way to build a graph. We put the starting stop in the queue, and get the bus which can be taken in this stop, after the stop is popped out. We skipped the bus taken before. Then, we iterate through all teh stop in this bus route. If the stop is the destination, return the answer. Otherwise, we add it in the queue. We count the number of connected component.


Time complexity: $O(m * n)$ m: # of buses, n: # of routes </br> 
Space complexity: $O(m * n + m)$ 
</br>
</br>


#### Python

```python
from collections import deque, defaultdict
class Solution:
    def numBusesToDestination(self, routes: List[List[int]], S: int, T: int) -> int:
        if S == T: return 0
        
        #graph record the bus in every stop
        graph = defaultdict(list)
        for i in range(len(routes)):
            for stop in routes[i]:
                graph[stop].append(i)
        #Bus taken
        visited = [0] * len(routes)
        q = deque()
        q.append(S)
        ans = 0 
        
        while q:
            ans += 1
            for _ in range(len(q)):
                curr = q.popleft()
                for bus in graph[curr]:
                    if visited[bus]: continue
                    visited[bus] = 1
                    for stop in routes[bus]:
                        if stop == T: return ans
                        q.append(stop)
        return -1
            
```

#### Java

```java
class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        if(source == target) return 0;
        Map<Integer, ArrayList<Integer>> graph = new HashMap<>();
        
        for(int i = 0; i < routes.length; i++){
            for(int stop: routes[i]){
                graph.putIfAbsent(stop, new ArrayList<Integer>());
                graph.get(stop).add(i);
            }
        }

        boolean[] busTaken = new boolean[routes.length];
        Queue<Integer> q = new LinkedList<>();
        q.offer(source);
        int ans = 0;

        while(!q.isEmpty()){
            ans++;
            int size = q.size();
            for(int i = 0; i < size; i++){
                int curr = q.poll();
                for(int bus: graph.get(curr)){
                    if(busTaken[bus]) continue;
                    busTaken[bus] = true;
                    for(int stop :routes[bus]){
                        if (stop == target) return ans;
                        q.offer(stop);
                    }
                }
            }
        }
        return -1;
    }
}
```

<Disqus shortname="patricksudo" />