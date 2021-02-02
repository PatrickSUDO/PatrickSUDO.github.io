---
title: 210. Course Schedule II
description: leetcode 210. Course Schedule II
date: 2021-02-02
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DFS
  - Graph
  - Topological Sort
categories:
  - LeetCode
---
[LeetCode 210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

---
### Problem: <br/>

There are a total of `n` courses you have to take labelled from `0` to `n - 1`.

Some courses may have `prerequisites`, for example, if `prerequisites[i] = [ai, bi]` this means you must take the course `bi` before the course `ai`.

Given the total number of courses `numCourses` and a list of the `prerequisite` pairs, return the ordering of courses you should take to finish all courses.

If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

#### Example 1:

    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: [0,1]
    Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

#### Example 2:

    Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    Output: [0,2,1,3]
    Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
    So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

#### Example 3:

    Input: numCourses = 1, prerequisites = []
    Output: [0]


#### Constraints:

- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= numCourses * (numCourses - 1)
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- ai != bi
- All the pairs [ai, bi] are **distinct**.

---

#### Solution: </br>

Topological sorting of directed graphs. The purpose of topological sorting is to check whether it can be completed or not. If there are no loops, all the prerequisites and non-prerequisites can be completed. First, convert the course into a 2D graph, and then build a `visted` array to record the visited and the visiting. There are three states in total.
1. Haven't visited yet (0)
2. Visiting (1)
3. Visited (2)

If the node we step on is already visiting, we are back to ourselves when exploring its neighbors. Therefore, it means we have a loop.
If you go to the one we have already visited, it means we can finish the route, and there is no loop. If there is any loop detected during the `DFS`, return true.

It's similar to post-order traversal, first set as visiting, then explore neighbors, enter `dfs` recursively, and mark as visited after returning. We add the visited node in an array which will be return finally.


Time complexity: $O(V+E)$ than one times</br>
Space complexity: $O(V+E)$ 
</br>
</br>


#### Python

```python
from collections import defaultdict
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = collections.defaultdict(list)
        for first, second in prerequisites:
            graph[first].append(second)
        visit = [0] * numCourses
        path = []
        
        def dfs(curr, visit, path):
            #True 為可以修完
            if visit[curr] == 1: return False
            if visit[curr] == 2: return True
            visit[curr] = 1
            for course in graph[curr]:
                if not dfs(course, visit, path): 
                    return False 
            visit[curr] = 2
            path.append(curr)
            return True
            
        for i in range(numCourses):
            if not dfs(i, visit, path): return []
        return path
```

#### Java

```java
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        ArrayList<Integer>[] graph = new ArrayList[numCourses];
        for(int i = 0; i < numCourses; i++)  graph[i] = new ArrayList<>();
        ArrayList<Integer> ans = new ArrayList<>();
        int[] visited = new int[numCourses];
        for(int[] courses: prerequisites){
            graph[courses[0]].add(courses[1]);
        }
    
        for(int i = 0 ; i < numCourses; i++){
            if(dfs(graph, visited, i, ans)) return new int[]{};
        }
        
        return ans.stream().mapToInt(x -> x).toArray();
    }

    private boolean dfs(ArrayList<Integer>[] graph, int[] visited, int curr, ArrayList<Integer> ans){
        if(visited[curr] == 1) return true;
        if(visited[curr] == 2) return false;
        
        visited[curr] = 1;
        
        for(Integer neighbor: graph[curr]){
            if(dfs(graph, visited, neighbor, ans)) return true;
        }
        
        visited[curr] = 2;
        ans.add(curr);
        
        return false;
    }
}
```


<Disqus shortname="patricksudo" />