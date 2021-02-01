---
title: 841. Making A Large Island
description: leetcode 841. Making A Large Island
date: 2021-02-01
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DFS
  - Graph
categories:
  - LeetCode
---
[LeetCode 0841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)

---
### Problem: <br/>

There are `N` rooms and you start in room `0`.  Each room has a distinct number in `0, 1, 2, ..., N-1`, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys `rooms[i]`, and each key `rooms[i][j]` is an integer in `[0, 1, ..., N-1]` where `N = rooms.length`.  A key `rooms[i][j] = v` opens the room with number `v`.

Initially, all the rooms start locked (except for room `0`). 

You can walk back and forth between rooms freely.

Return `true` if and only if you can enter every room.

#### Example 1:

    Input: [[1],[2],[3],[]]
    Output: true
    Explanation:  
    We start in room 0, and pick up key 1.
    We then go to room 1, and pick up key 2.
    We then go to room 2, and pick up key 3.
    We then go to room 3.  Since we were able to go to every room, we return true.

#### Example 2:

    Input: [[1,3],[3,0,1],[2],[0]]
    Output: false
    Explanation: We can't enter the room with number 2.



#### Note:

1. 1 <= rooms.length <= 1000
2. 0 <= rooms[i].length <= 1000
3. The number of keys in all rooms combined is at most `3000`.

---

#### Solution: </br>

We iterate through all the rooms and the rooms with key in the current rooms by `DFS`.
An array or a hash table is needed to record the room visited. After traversing all the rooms, we return true is every room in the array is visited.


Time complexity: $O(V+E)$</br>
Space complexity: $O(V)$ 
</br>
</br>


#### Python

```python
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False] * len(rooms)
        visited[0] = True
        def dfs(curr):
            for key in rooms[curr]:
                if not visited[key]: 
                    visited[key] = True
                    dfs(key) 
        dfs(0)
        return all(visited)
```

#### Java

```java
class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        int n = rooms.size();
        boolean[] visited = new boolean[n];
        visited[0] = true;
        dfs(rooms, visited, 0);
        for(boolean room : visited){
            if(!room) return false;
        }       
        return true;
    }
    private void dfs(List<List<Integer>> rooms, boolean[] visited, int curr){
        for(Integer key : rooms.get(curr)){
            if(visited[key]) continue;
            visited[key] = true;
            dfs(rooms, visited, key);
        }
    }
}
```

<Disqus shortname="patricksudo" />