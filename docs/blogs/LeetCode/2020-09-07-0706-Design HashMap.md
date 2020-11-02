---
title: 0706. Design HashMap 
date: 2020-09-07
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags:
  - LeetCode-Easy
  - Hash Table
categories:
  - LeetCode
---
[LeetCode 0706. Design HashMap](https://leetcode.com/problems/design-hashmap/)

---
**Problem:** <br/>

Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.

---
**Solution:** <br/>
To implement the hash map, we need a way to encode the key and allocate each key in a certain position. Hence, modulo may be a great idea. To save memory usage, chaining by Linked List is suitable here. The size of hashing or the setting of the modulo is a key to the performance, the number is from 1 to 1000000, so 1000 which is the square root of 1000000 is a good setting.

Code inspired from *douzigege*.


```python
class ListNode:
    def __init__(self, key, val):
        self.pair = (key, val)
        self.next = None
        
class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.modulo = 1000
        self.hash = [None] * self.modulo

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        index = key % self.modulo
        if not self.hash[index]:
            self.hash[index] = ListNode(key, value)
        else:
            curr = self.hash[index]
            while curr:
                if curr.pair[0] == key:
                    curr.pair = (key, value)
                    return
                if not curr.next: break
                curr = curr.next
            curr.next = ListNode(key, value)
            

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        index = key % self.modulo
        curr = self.hash[index]
        while curr:
            if curr.pair[0] == key:
                return curr.pair[1]
            else:
                curr = curr.next
        return -1
    
    
    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        index = key % self.modulo
        curr = prev = self.hash[index]
        if not curr: return
        if curr.pair[0] == key:
            self.hash[index] = curr.next
        else:
            curr = curr.next
            while curr:
                if curr.pair[0] == key:
                    prev.next = curr.next
                    break
                else:
                    curr, prev = curr.next, prev.next

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
```
<Disqus shortname="patricksudo" />
