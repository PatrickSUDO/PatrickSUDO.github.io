(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{512:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://leetcode.com/problems/copy-list-with-random-pointer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode 0138. Copy List with Random Pointer"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" Problem:")]),t._v(" "),a("p",[t._v("A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.")]),t._v(" "),a("p",[t._v("Return a "),a("strong",[t._v("deep copy")]),t._v(" of the list.")]),t._v(" "),a("p",[t._v("The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:")]),t._v(" "),a("h4",{attrs:{id:"example-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[t._v("#")]),t._v(" Example 1:")]),t._v(" "),a("img",{staticStyle:{width:"700px",height:"142px"},attrs:{alt:"",src:"https://assets.leetcode.com/uploads/2019/12/18/e1.png"}}),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\n")])])]),a("h4",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example 2:")]),t._v(" "),a("img",{staticStyle:{width:"700px",height:"114px"},attrs:{alt:"",src:"https://assets.leetcode.com/uploads/2019/12/18/e2.png"}}),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Input: head = [[1,1],[2,1]]\nOutput: [[1,1],[2,1]]\n")])])]),a("h4",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example 3:")]),t._v(" "),a("img",{staticStyle:{width:"700px",height:"122px"},attrs:{alt:"",src:"https://assets.leetcode.com/uploads/2019/12/18/e3.png"}}),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Input: head = [[3,null],[3,0],[3,null]]\nOutput: [[3,null],[3,0],[3,null]]\n")])])]),a("h4",{attrs:{id:"example-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example 4:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Input: head = []\nOutput: []\nExplanation: Given linked list is empty (null pointer), so return null.\n")])])]),a("h4",{attrs:{id:"constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[t._v("#")]),t._v(" Constraints:")]),t._v(" "),a("ul",[a("li",[t._v("-10000 <= Node.val <= 10000")]),t._v(" "),a("li",[t._v("Node.random is null or pointing to a node in the linked list.")]),t._v(" "),a("li",[t._v("Number of Nodes will not exceed 1000.")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution:")]),t._v(" "),a("p",[t._v('The deep copy means you need to traverse through all the elements and copy all th node including their value and pointers. We can copy the value and the normal "next" point in the Linked List first, then copy the "random" pointer. Because after we collect all the nodes, it\'s easy to check and build the "random" pointer to the other node in the list. We store the node in a hash table. As other Linked List problem, we can have dummy node first.')]),t._v(" "),a("p",[t._v("Time complexity: "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"O"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" "),a("br"),t._v("\nSpace complexity: "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"O"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("br")],1),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n# Definition for a Node.\nclass Node:\n    def __init__(self, x: int, next: \'Node\' = None, random: \'Node\' = None):\n        self.val = int(x)\n        self.next = next\n        self.random = random\n"""')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyRandomList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        dummy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        nodeDict "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        newHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            nodeDict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node\n            newHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node\n            newHead "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            curr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        curr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                nodeDict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeDict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            curr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);