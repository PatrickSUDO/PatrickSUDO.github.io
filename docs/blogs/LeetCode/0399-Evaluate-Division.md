---
title: 207. Course Schedule
description: leetcode 207. Course Schedule
date: 2021-02-04
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DFS
  - Graph
  - Union Find
categories:
  - LeetCode
---
[LeetCode 207. Course Schedule](https://leetcode.com/problems/evaluate-division/)

---
### Problem: <br/>

You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string that represents a single variable.

You are also given some `queries`, where `queries[j] = [Cj, Dj]` represents the `jth`query where you must find the answer for `Cj / Dj = ?`.

Return the answers to all queries. If a single answer cannot be determined, return `-1.0`.

**Note:** The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

#### Example 1:

    Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
    Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
    Explanation: 
    Given: a / b = 2.0, b / c = 3.0
    queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
    return: [6.0, 0.5, -1.0, 1.0, -1.0 ]

#### Example 2:

    Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
    Output: [3.75000,0.40000,5.00000,0.20000]

#### Example 3:

    Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
    Output: [0.50000,2.00000,-1.00000,-1.00000]

#### Constraints:

- 1 <= equations.length <= 20
- equations[i].length == 2
- 1 <= Ai.length, Bi.length <= 5
- values.length == equations.length
- 0.0 < values[i] <= 20.0
- 1 <= queries.length <= 20
- queries[i].length == 2
- 1 <= Cj.length, Dj.length <= 5
- Ai, Bi, Cj, Dj consist of lower case English letters and digits.

---

#### Solution 1: DFS</br>

Do it with DFS, and it's a weighted graph. The weights of a/b and b/a are the reciprocal of each other. First, construct the graph using the hash map. Then, enter the divide recursion. If the nodes are the same, return 1.0. 
Note that it is a float or double, then mark it as visited. Next, consider other neighboring nodes. Because the path must be positive, check the route relationship of adjacent points, and multiply the number found.
If not, return -1. 

Time complexity: $O(mn)$ n is the number of equations, while m is the number of queries</br>
Space complexity: $O(n)$ 
</br>
</br>


#### Python

```python
from collections import defaultdict
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        # result of x/y
        def divid(x, y, visited):
            if x==y: return 1.0
            visited.add(x)
            #consider other route
            for n in g[x]:
                if n in visited: continue
                visited.add(n)
                d = divid(n, y, visited) # d = n / y
                if d > 0: return d*g[x][n] # x / y = x / n * n / y
            return -1
        
        #build the graph
        g = defaultdict(dict)
        for (x, y), v in zip(equations, values):
            g[x][y] = v
            g[y][x] = 1.0/v
            
        ans = [divid(x,y,set()) if x in g and y in g else -1 for x,y in queries]
        return ans
```

#### Java

```java
class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        int n = equations.size(), m =queries.size();

        HashMap<String, HashMap<String, Double>> graph = new HashMap<>();
        double[] ans = new double[m];
        for(int i = 0; i < n; i++){
            String a = equations.get(i).get(0), b = equations.get(i).get(1);
            Double v = values[i];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, v);
            graph.get(b).put(a, 1/v);
        }
        
    
        for(int j = 0 ; j < m; j ++){
            String x = queries.get(j).get(0), y = queries.get(j).get(1);
            double quotient = -1.0;
            
            if(graph.containsKey(x) && graph.containsKey(y)){
                quotient = dfs(graph, new HashSet<String>(), x, y);
            }           
            ans[j] = quotient;
        }
                
        return ans;

    }

    private double dfs(HashMap<String, HashMap<String, Double>> graph, HashSet<String> visited, String x , String y){
        if(x.equals(y)) return 1.0;
        visited.add(x);
        for(Map.Entry<String, Double> node: graph.get(x).entrySet()){
            String z = node.getKey();
            if(visited.contains(z)) continue;
            visited.add(z);
            double d = dfs(graph, visited, z, y);
            if(d > 0) return graph.get(x).get(z) * d;
        }
        return -1.0;
    }
}
```

#### Solution 2: Union Find</br>

The path of multiple calculations can be compressed and represent only with the parents' node by the union-find data structure. We add each equation with the value to the `parents` hash map and set the ranks of all the strings with 1. If both strings exist in the parents, we can do the union operation to merge the connected according to the rank. The one with a smaller rank will be merged into the higher one. The value should be divided if one component is disconnected from its current parent node, while it should be multiplied when another smaller component is connected to its parent via it.


Then we can use the find operation to get the number of each operation. We should return null if there is no such string in the `parents`. Otherwise, keep finding the parents node until the parents' node is equal to itself. The ratio should be multiplied in every path compression.

Time complexity: $O(m+n)$ n is the number of equations, while m is the number of queries</br>
Space complexity: $O(n)$ 
</br>
</br>


#### Python

```python
from collections import defaultdict
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        U = {}
        def find(x):
            if x != U[x][0]:
                px, pv = find(U[x][0])
                U[x] = (px, U[x][1] * pv)
            return U[x]
    
        def divide(x, y):
            rx, vx = find(x)
            ry, vy = find(y)
            if rx != ry: return -1
            return vx / vy
            
        
        for (x,y), v in zip(equations, values):
            if x not in U and y not in U:
                U[x] = (y, v)
                U[y] = (y, 1.0)
            elif x not in U:
                U[x] = (y, v)
            elif y not in U:
                U[y] = (x, 1.0/v)
            else:
                rx, vx = find(x) #rX, X / rX
                ry, vy = find(y) #rY, Y / rY
                #X / Y = (X / rX / (Y / rY))
                U[rx] = (ry, v/vx *vy)
                
        ans = [divide(x, y) if x in U and y in U else -1 for x, y in queries]
        return ans
```

#### Java

```java
class Solution {
    class Pair{
        String parent; 
        Double ratio;
        
        Pair(String y, Double v){
            parent = y;
            ratio = v;
        }
    }
    
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        int n = equations.size(), m = queries.size();
        HashMap<String, Pair> parents = new HashMap<>();
        HashMap<String, Integer> ranks = new HashMap<>();
        double[] ans = new double[m];
        
        for(int i = 0; i < n ; i++){
            String x = equations.get(i).get(0), y = equations.get(i).get(1);
            Double ratio = values[i];      
            if(!parents.containsKey(x) && !parents.containsKey(y)){
                parents.put(x, new Pair(y, ratio));
                parents.put(y, new Pair(y, 1.0));
                ranks.put(x, 1);
                ranks.put(y, 1);
            } else if(!parents.containsKey(x)){
                parents.put(x, new Pair(y, ratio));
                ranks.put(x, 1);
            } else if(!parents.containsKey(y)){
                parents.put(y, new Pair(x, 1.0 / ratio));
                ranks.put(y, 1);
            } else{
                union(parents, ranks, x, y, ratio);
            }
        }      

        for(int j = 0 ; j < m; j ++){
            String a = queries.get(j).get(0), b = queries.get(j).get(1);
            Pair pA = find(parents, a), pB = find(parents, b);
            if(pA == null || pB == null || !pA.parent.equals(pB.parent)){
                ans[j] = - 1.0;
            } else{
                ans[j] = pA.ratio / pB.ratio;
            }
        }
                
        return ans;

    }

    private Pair find(HashMap<String, Pair> parents, String x){
        if(!parents.containsKey(x)) return null;
        Pair node = parents.get(x);
        if(!node.parent.equals(x)){
            Pair p = find(parents, node.parent);
            node.parent = p.parent;
            node.ratio *= p.ratio ;
        }
        return node;
    }
    
    private void union(HashMap<String, Pair> parents, HashMap<String, Integer> ranks, String x, String y, double ratio){
        Pair pX = find(parents, x);
        Pair pY = find(parents, y);
        if(ranks.get(pX.parent) > ranks.get(pY.parent)){
            parents.put(pY.parent, new Pair(pX.parent, pX.ratio / (pY.ratio * ratio)));
        } else if(ranks.get(pX.parent) < ranks.get(pY.parent)) {
            parents.put(pX.parent, new Pair(pY.parent, pY.ratio * ratio / pX.ratio ));
        } else{
            parents.put(pX.parent, new Pair(pY.parent, pY.ratio * ratio / pX.ratio ));
            ranks.put(pY.parent, ranks.get(pY.parent) + 1);
        } 
        return;          
    }  
}
```


<Disqus shortname="patricksudo" />
