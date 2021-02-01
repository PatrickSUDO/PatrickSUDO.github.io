---
title: 1202. Smallest String With Swaps
description: leetcode 1202. Smallest String With Swaps
date: 2021-02-01
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DFS
  - Graph
  - Union Find
  - Array
categories:
  - LeetCode
---
[LeetCode 1202. Smallest String With Swaps](https://leetcode.com/problems/keys-and-rooms/)

---
### Problem: <br/>

You are given a string `s`, and an array of `pairs` of indices in the string `pairs` where `pairs[i] = [a, b]` indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given `pairs` **any number of times.**

Return the lexicographically smallest string that s can be changed to after using the swaps.

#### Example 1:

    Input: s = "dcab", pairs = [[0,3],[1,2]]
    Output: "bacd"
    Explaination: 
    Swap s[0] and s[3], s = "bcad"
    Swap s[1] and s[2], s = "bacd"

#### Example 2:

    Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
    Output: "abcd"
    Explaination: 
    Swap s[0] and s[3], s = "bcad"
    Swap s[0] and s[2], s = "acbd"
    Swap s[1] and s[2], s = "abcd"

#### Example 3:

    Input: s = "cba", pairs = [[0,1],[1,2]]
    Output: "abc"
    Explaination: 
    Swap s[0] and s[1], s = "bca"
    Swap s[1] and s[2], s = "bac"
    Swap s[0] and s[1], s = "abc"


#### Constraints:

- 1 <= s.length <= 10^5
- 0 <= pairs.length <= 10^5
- 0 <= pairs[i][0], pairs[i][1] < s.length
- s only contains lower case English letters.

---

#### Solution 1: DFS</br>

First, we build a graph with the characters and characters connected with the current one. Then, using `DFS` to add both connected index and characters in the array. Next, sort them. Finally, convert them back to the string according to their original index.


Time complexity: $O(VlogV + k(V+E))$ We may visit some node or edge with multiple components more than one times</br>
Space complexity: $O(V)$ 
</br>
</br>


#### Python

```python
class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: List[List[int]]) -> str:
        def dfs(i):
            visited[i] = True
            component.append(i)
            for j in adj_lst[i]:
                if not visited[j]:
                    dfs(j)
            
        n = len(s)
        adj_lst = [[] for _ in range(n)]
        for i, j in pairs:
            adj_lst[i].append(j)
            adj_lst[j].append(i)
        visited = [False for _ in range(n)]
        lst = list(s)
        for i in range(n):
            if not visited[i]:
                component = []
                dfs(i)
                component.sort()
                chars = [lst[k] for k in component]
                chars.sort()
                for i in range(len(component)):
                    lst[component[i]] = chars[i]
        return ''.join(lst)
```

#### Java

```java
class Solution {
    public String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
        HashMap<Integer, ArrayList<Integer>> graph = new HashMap<>();
        int n = s.length();

        for(int i = 0; i < pairs.size(); i ++){
            int u = pairs.get(i).get(0);
            int v = pairs.get(i).get(1);
            if(!graph.containsKey(u)) graph.put(u, new ArrayList<>());
            if(!graph.containsKey(v)) graph.put(v, new ArrayList<>());
            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        char[] ans = new char[n];
        boolean[] visited = new boolean[n];
        for(int i = 0; i < n; i++){
            if(visited[i]) continue;
            visited[i] = true;
            List<Integer> components = new ArrayList<>();
            List<Character> chars = new ArrayList<>();
            dfs(graph, s, visited, components, chars, i);
            Collections.sort(components);
            Collections.sort(chars);
            for(int j = 0; j < components.size(); j++){
                ans[components.get(j)] = chars.get(j);
            }
        }
        return String.valueOf(ans);
    }

    private void dfs(HashMap<Integer, ArrayList<Integer>> graph, String s, boolean[] visited , List<Integer> components, List<Character> chars, int curr){
        visited[curr] = true;
        components.add(curr);
        chars.add(s.charAt(curr));
        if(!graph.containsKey(curr)) return;
        for(Integer k:  graph.get(curr)){
            if(visited[k]) continue;
            dfs(graph, s, visited, components, chars, k);
        }
    }
}
```

#### Solution 2: Union Find </br>

A smarter way is using union-find. In union-find, we use the parents' node to represent all the child nodes, and we merge different connected components according to theirs. That is, the one with lower rank will be included in a higher rank one. Then, we can get the smallest character in each connected component using the heap data structure.

Time complexity: $O(VlogV + (V+E))$ We may visit some node or edge with multiple components more than one times</br>
Space complexity: $O(V)$ 
</br>
</br>

```java
//code inspired from BobbyCurry
class Solution {
    public String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
        int n = s.length();
        int[] parents = new int[n];
        int[] ranks = new int[n];
        
        for(int i = 0; i < n; i++){
            parents[i] = i;
        }
        
        for(List<Integer> pair : pairs){
            union(parents, ranks, pair.get(0), pair.get(1));
        }
        
        HashMap<Integer, PriorityQueue<Character>> graph = new HashMap<>();
        for(int i = 0; i < n; i ++){
            int root = find(parents, i);
            graph.putIfAbsent(root, new PriorityQueue<>());
            graph.get(root).offer(s.charAt(i));
        }
        
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < n; i++){
            sb.append(graph.get(find(parents, i)).poll());
        }
        
        return sb.toString();
    }

    private int find(int[] parents, int u){
        while(parents[u] != u){
            parents[u] = parents[parents[u]];
             u = parents[u];
        }
        return u;
    }
    private void union(int[] parents, int[] ranks, int u, int v){
        int pu = find(parents, u);
        int pv = find(parents, v);
        if(pu == pv) return;
        if(ranks[pu] < ranks[pv]){
            parents[pu] = pv;
        } else if(ranks[pu] > ranks[pv]){
            parents[pv] = pu;
        } else {
            parents[pv] = pu;
            ranks[pu]++;
        }
        return;
    }
}
```

<Disqus shortname="patricksudo" />