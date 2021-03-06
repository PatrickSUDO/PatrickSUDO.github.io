---
title: 146. LRU Cache
description: leetcode 146. LRU Cache
date: 2020-09-14
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Design
  - Hash Table
categories:
  - LeetCode
---
[LeetCode 0146. LRU Cache](https://leetcode.com/problems/lru-cache/)

---
**Problem:** <br/>

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

 

Example 1:

Input </br>
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]</br>
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]</br>

Output</br>
[null, null, null, 1, null, -1, null, -1, 3, 4]</br>

Explanation</br>
LRUCache lRUCache = new LRUCache(2);</br>
lRUCache.put(1, 1);</br>
lRUCache.put(2, 2);</br>
lRUCache.get(1);    // return 1</br>
lRUCache.put(3, 3); // evicts key 2</br>
lRUCache.get(2);    // returns -1 (not found)</br>
lRUCache.put(4, 4); // evicts key 1</br>
lRUCache.get(1);    // return -1 (not found)</br>
lRUCache.get(3);    // return 3</br>
lRUCache.get(4);    // return 4</br>
 

Constraints:</br>

1 <= capacity <= 3000</br>
0 <= key <= 3000</br>
0 <= value <= 104</br>
At most 3 * 104 calls will be made to get and put.</br>

---
**Solution:** <br/>

In Python, we can make use of the ordereddict, when implementing get method, we need to "refresh" the key because the cache removes the least used element. So we need to pop out or delete the desired key first and put it back to ensure this constrain is satisfied. When putting we need to refresh it, too. The popitem method for orderdict can support FIFO when set the "last" attribute to False.

Time $O(1)$  <br />
Space $O(n)$


```python
class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.lru = collections.OrderedDict()

    def get(self, key: int) -> int:
        if key in self.lru:
            v = self.lru.pop(key) 
            self.lru[key] = v
            return v
        else:
            return -1
        
    def put(self, key: int, value: int) -> None:
        if key in self.lru:
            self.lru.pop(key)
        elif len(self.lru) >= self.capacity: 
            self.lru.popitem(last = False) 
        self.lru[key] = value
```
Another way is using normal dictionary and double linked list. We need to maintain both of them at the same time. When implementing get, we still need to refresh the key. We use double linked list is because it can easily move back and forth to get the desired element easily. It takes constant time to add and remove nodes from the head or tail. When we hit the capacity, just remove the one next to the head, and the corresponding one in the dictionary.


Time $O(1)$  <br />
Space $O(n)$

```python
class ListNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None
        self.prev = None
    

class LRUCache:

    def __init__(self, capacity: int):
        self.lru = {}
        self.head = ListNode(0, 0)
        self.tail = ListNode(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key in self.lru:
            node = self.lru[key]
            self.remove(node)
            self.add(node)
            return node.val
        else:
            return -1
        

    def put(self, key: int, value: int) -> None:
        node = ListNode(key, value)
        if key in self.lru:
            self.remove(self.lru[key]) 
        self.add(node)
        self.lru[key] = node
        if len(self.lru) > self.capacity: 
            node = self.head.next
            self.remove(node)
            self.lru.pop(node.key)
    
    def add(self, node):
        p = self.tail.prev
        p.next = node
        node.prev = p
        node.next = self.tail
        self.tail.prev = node
        
    def remove(self, node):
        p = node.prev
        n = node.next
        p.next = n
        n.prev = p
    
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
```
<Disqus shortname="patricksudo" />




