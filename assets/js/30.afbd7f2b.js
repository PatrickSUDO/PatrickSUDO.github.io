(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{515:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://leetcode.com/problems/invert-binary-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode 0226. Invert Binary Tree"),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" Problem:")]),t._v(" "),e("p",[t._v("Invert a binary tree.")]),t._v(" "),e("h4",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("Input:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("     4\n   /   \\\n  2     7\n / \\   / \\\n1   3 6   9\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("     4\n   /   \\\n  7     2\n / \\   / \\\n9   6 3   1\n")])])]),e("hr"),t._v(" "),e("h3",{attrs:{id:"solution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution:")]),t._v(" "),e("p",[t._v("It was a famous Twitter saying that the contributor of Homebrew was rejected by Google because he can't invert a binary in the coding interview.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://imgur.com/mupKxie"}},[e("img",{attrs:{src:"https://imgur.com/mupKxie.png",title:"source: imgur.com"}})])]),t._v(" "),e("p",[t._v("Also, the AlgoExpert Ad. keep informing me I should know how to invert a binary tree, so I give a try, though the code is not optimized in my first submission.")]),t._v(" "),e("p",[t._v("Ok, let's forget the anecdote\b and dive into the question. To solve this question, first you need to abstract the whole left and right child trees to segments. It is to simplify the problem. We can recursively explore the tree to the deepest , then swap the left and right child tree. Then, the recursion can finish the rest of them.")]),t._v(" "),e("p",[t._v("Another important thing is remember the termination condition when you use recursion. Here, when there is no node or we are at the leaf node, the recursion should be stopped.")]),t._v(" "),e("p",[t._v("Time complexity: "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-mi",{staticClass:"mjx-i"},[e("mjx-c",{attrs:{c:"O"}})],1),e("mjx-mo",{staticClass:"mjx-n"},[e("mjx-c",{attrs:{c:"("}})],1),e("mjx-mi",{staticClass:"mjx-i"},[e("mjx-c",{attrs:{c:"n"}})],1),e("mjx-mo",{staticClass:"mjx-n"},[e("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" "),e("br"),t._v("\nSpace complexity: "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-mi",{staticClass:"mjx-i"},[e("mjx-c",{attrs:{c:"O"}})],1),e("mjx-mo",{staticClass:"mjx-n"},[e("mjx-c",{attrs:{c:"("}})],1),e("mjx-mi",{staticClass:"mjx-i"},[e("mjx-c",{attrs:{c:"n"}})],1),e("mjx-mo",{staticClass:"mjx-n"},[e("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" "),e("br"),t._v(" "),e("br")],1),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Definition for a binary tree node.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# class TreeNode:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     def __init__(self, val=0, left=None, right=None):")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         self.val = val")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         self.left = left")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         self.right = right")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("invertTree")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TreeNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" TreeNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("        \n        root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("invertTree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("invertTree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("Disqus",{attrs:{shortname:"patricksudo"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);