---
title: 721. Accounts Merge
description: leetcode 721. Accounts Merge
date: 2021-02-07
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
[LeetCode 721. Accounts Merge](https://leetcode.com/problems/accounts-merge/)

---
### Problem: <br/>

Given a list `accounts`, each element `accounts[i]` is a list of strings, where the first element `accounts[i][0]` is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails **in sorted order**. The accounts themselves can be returned in any order.

#### Example 1:

    Input: 
    accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
    Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
    Explanation: 
    The first and third John's are the same person as they have the common email "johnsmith@mail.com".
    The second John and Mary are different people as none of their email addresses are used by other accounts.
    We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
    ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

#### Note:

- The length of accounts will be in the range [1, 1000].
- The length of accounts[i] will be in the range [1, 10].
- The length of accounts[i][j] will be in the range [1, 30].

---

#### Solution 1: DFS</br>

We use the first email of a name as the reference of a specific name. We use a set in the hash map to eliminate the duplicate. Then, we use them to build a graph. Also, we build another hash map to map the name and its first email. Next, we iterate through all the first email using `DFS` to find every email of the connected components. Each component will be sorted and add to the answer.

Time complexity: $O(\sum_{}^{} a_{i}log{a_{i}})$, where $a_{i}$ is the length of accounts[i]</br>
Space complexity: $O(\sum_{}^{} a_{i})$ 
</br>
</br>


#### Python

```python
class Solution(object):
    def accountsMerge(self, accounts):
        em_to_name = {}
        graph = collections.defaultdict(set)
        for acc in accounts:
            name = acc[0]
            em_to_name[acc[1]] = name
            for email in acc[1:]:
                graph[acc[1]].add(email)
                graph[email].add(acc[1])
        seen = set()
        def dfs(first_email, email, component):
            seen.add(email)
            component.append(email)
            for neighbor in graph[email]:
                if neighbor in seen: continue
                dfs(first_email, neighbor, component)
            return component
            
        ans = []
        for email in em_to_name:
            if email in seen: continue
            first_email = email
            component = dfs(first_email, email, [])
            ans.append([em_to_name[email]] + sorted(component))

```

#### Java

```java
class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        HashMap<String, String> emailToName = new HashMap<>();
        HashMap<String, HashSet<String>> graph = new HashMap<>();
        List<List<String>> ans = new ArrayList<>();
        HashSet<String> seen = new HashSet<>();

        for(List<String> account: accounts){
            String name = account.get(0);
            emailToName.put(account.get(1), name);
            for(String email: account.subList(1, account.size())){
                graph.putIfAbsent(account.get(1), new HashSet<>());
                graph.putIfAbsent(email, new HashSet<>());
                graph.get(account.get(1)).add(email);
                graph.get(email).add(account.get(1));
            }
        }


        for(Map.Entry<String, String> entry: emailToName.entrySet()){
            String firstEmail = entry.getKey();
            if(seen.contains(firstEmail)) continue;
            ArrayList<String> component = dfs(graph, seen ,firstEmail, new ArrayList<>());
            Collections.sort(component);
            ArrayList<String> person = new ArrayList<>();
            person.add(entry.getValue());
            person.addAll(component);
            ans.add(person);
        }

        return ans;
    }
    private ArrayList<String>  dfs(HashMap<String, HashSet<String>> graph, HashSet<String> seen,
                                   String email, ArrayList<String> component){
        seen.add(email);
        component.add(email);
        for(String neighbor: graph.get(email)){
            if(seen.contains(neighbor)) continue;
            component = dfs(graph, seen, neighbor, component);
        }
        
        return component;

    }
}
```

#### Solution 2: Union Find</br>

We use the index to represent each email. We start to combine each email with the first emails if the emails are encoded as the index. Then, using the find operation to get the parent email of each connected component and sort the components. Finally, add the name with the sorted element for the `ans`.

Time complexity: $O(AlogA)$, where $A = \sum_{}^{}a_{i}$, and $a_{i}$ the length of accounts[i]</br>
Space complexity: $O(A)$ 
</br>
</br>


#### Python

```python
from collections import defaultdict
class DSU:
    def __init__(self):
        self.p = list(range(100001))
    def find(self, x):
        while self.p[x] != x:
            self.p[x] = self.p[(self.p[x])]
            x = self.p[x]
        return x
    def union(self, x, y):
        self.p[self.find(x)] = self.find(y)
class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        dsu = DSU()
        em_to_name = {}
        em_to_id = {}
        i = 0
        for acc in accounts:
            name = acc[0]
            for email in acc[1:]:
                em_to_name[email] = name
                if email not in em_to_id:
                    em_to_id[email] = i
                    i += 1
                dsu.union(em_to_id[acc[1]], em_to_id[email]) #把後面的email都連到第一個
        ans = defaultdict(list)
        for email in em_to_name:
            ans[dsu.find(em_to_id[email])].append(email) #找到每一個email的根節點名字
        return [[em_to_name[v[0]]] + sorted(v) for v in ans.values()]
```

#### Java

In Java, `TreeSet` can be used to sort the components.

```java
class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        int[] ranks = new int[accounts.size()];
        int[] parents = new int[accounts.size()];
        HashMap<String, Integer> emailToID = new HashMap<>();
        HashMap<Integer, TreeSet<String>> users = new HashMap<>();
        List<List<String>> ans = new ArrayList<>();

        for(int i = 0; i < accounts.size(); i ++){
            parents[i] = i;
        }

        int id = 0;
        for(int i = 0; i < accounts.size(); i++){
            for(int j = 1; j < accounts.get(i).size(); j++){
                String email = accounts.get(i).get(j);
                if(emailToID.containsKey(email)){
                    int person = emailToID.get(email);
                    union(parents, ranks, i, person);
                } else{
                    emailToID.put(email, i);
                }
            }
        }

        for(int i = 0; i < accounts.size(); i++){
            int parent = find(parents, i);
            List<String> emails = accounts.get(i);
            users.putIfAbsent(parent, new TreeSet<String>());
            users.get(parent).addAll(emails.subList(1, emails.size()));
        }


        for(Map.Entry<Integer, TreeSet<String>> entry: users.entrySet()){
            String name = accounts.get(entry.getKey()).get(0);
            List<String> account = new ArrayList<>(entry.getValue());
            account.add(0, name);
            ans.add(account);
        }
        return ans;
    }
    private int find(int[] parents, int root) {
        while(parents[root] != root){
            parents[root] = parents[parents[root]];
            root = parents[root];
        }
        return root;
    }
    private void union(int[] parents, int[] ranks, int u, int v){
        int pu = find(parents, u);
        int pv = find(parents, v);
        if(pu == pv) return;
        if(ranks[pu] < ranks[pv]){
            parents[pu] = pv;
        } else if (ranks[pu] < ranks[pv]){
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
