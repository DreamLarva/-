"use strict";
/*
[83] 删除排序链表中的重复元素

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/

Tags: algorithms linked-list

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (44.31%)
* Total Accepted: 19.5K
* Total Submissions: 43.9K
* Testcase Example: '[1,1,2]'

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2


示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var deleteDuplicates = function (head) {
    if (head === null)
        return null;
    // 新链表的尾节点
    let tail = head;
    // 正在准备插入的原节点
    let currentNode = head.next;
    while (currentNode !== null) {
        if (currentNode.val !== tail.val) {
            tail.next = currentNode;
            tail = tail.next;
        }
        currentNode = currentNode.next;
    }
    // 保证最后一个 后没有多余的节点
    tail.next = null;
    return head;
};
const { createLinkedList } = require("./util/linked_list");
const linkedList = createLinkedList([1, 1, 2, 3, 3]);
const uniqueLinkedList = deleteDuplicates(linkedList);
console.log(uniqueLinkedList.toString());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMu5Yig6Zmk5o6S5bqP6ZO+6KGo5Lit55qE6YeN5aSN5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84My7liKDpmaTmjpLluo/pk77ooajkuK3nmoTph43lpI3lhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFOztBQUVGOzs7Ozs7R0FNRztBQUNIOzs7R0FHRztBQUNILE1BQU0sUUFBUTtJQUlWLFlBQVksR0FBTTtRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLElBQXNCO0lBQ25ELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvQixVQUFVO0lBQ1YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLGFBQWE7SUFDYixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVCLE9BQU8sV0FBVyxLQUFLLElBQUksRUFBRTtRQUN6QixJQUFJLFdBQVcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUNELFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO0tBQ2xDO0lBQ0Qsa0JBQWtCO0lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sVUFBVSxHQUFHLGdCQUFnQixDQUMvQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFFLENBQUM7QUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbls4M10g5Yig6Zmk5o6S5bqP6ZO+6KGo5Lit55qE6YeN5aSN5YWD57SgXG5cbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JlbW92ZS1kdXBsaWNhdGVzLWZyb20tc29ydGVkLWxpc3QvZGVzY3JpcHRpb24vXG5cblRhZ3M6IGFsZ29yaXRobXMgbGlua2VkLWxpc3RcblxuTGFuZ3M6IGMgY3BwIGNzaGFycCBnb2xhbmcgamF2YSBqYXZhc2NyaXB0IGtvdGxpbiBwaHAgcHl0aG9uIHB5dGhvbjMgcnVieSBydXN0IHNjYWxhIHN3aWZ0XG5cbiogYWxnb3JpdGhtc1xuKiBFYXN5ICg0NC4zMSUpXG4qIFRvdGFsIEFjY2VwdGVkOiAxOS41S1xuKiBUb3RhbCBTdWJtaXNzaW9uczogNDMuOUtcbiogVGVzdGNhc2UgRXhhbXBsZTogJ1sxLDEsMl0nXG5cbue7meWumuS4gOS4quaOkuW6j+mTvuihqO+8jOWIoOmZpOaJgOaciemHjeWkjeeahOWFg+e0oO+8jOS9v+W+l+avj+S4quWFg+e0oOWPquWHuueOsOS4gOasoeOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiAxLT4xLT4yXG7ovpPlh7o6IDEtPjJcblxuXG7npLrkvosgMjpcblxu6L6T5YWlOiAxLT4xLT4yLT4zLT4zXG7ovpPlh7o6IDEtPjItPjNcblxuKi9cblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLm5leHQgPSBudWxsO1xuICogfVxuICovXG4vKipcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG5jbGFzcyBMaXN0Tm9kZTxUPiB7XG4gICAgdmFsOiBUO1xuICAgIG5leHQ6IG51bGwgfCBMaXN0Tm9kZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB9XG59XG5cbnZhciBkZWxldGVEdXBsaWNhdGVzID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlPG51bWJlcj4pIHtcbiAgICBpZiAoaGVhZCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgLy8g5paw6ZO+6KGo55qE5bC+6IqC54K5XG4gICAgbGV0IHRhaWwgPSBoZWFkO1xuICAgIC8vIOato+WcqOWHhuWkh+aPkuWFpeeahOWOn+iKgueCuVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWQubmV4dDtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLnZhbCAhPT0gdGFpbC52YWwpIHtcbiAgICAgICAgICAgIHRhaWwubmV4dCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgdGFpbCA9IHRhaWwubmV4dDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgfVxuICAgIC8vIOS/neivgeacgOWQjuS4gOS4qiDlkI7msqHmnInlpJrkvZnnmoToioLngrlcbiAgICB0YWlsLm5leHQgPSBudWxsO1xuICAgIHJldHVybiBoZWFkO1xufTtcblxuY29uc3Qge2NyZWF0ZUxpbmtlZExpc3R9ID0gcmVxdWlyZShcIi4vdXRpbC9saW5rZWRfbGlzdFwiKTtcbmNvbnN0IGxpbmtlZExpc3QgPSBjcmVhdGVMaW5rZWRMaXN0KFxuICAgIFsxLCAxLCAyLCAzLCAzXSk7XG5jb25zdCB1bmlxdWVMaW5rZWRMaXN0ID0gZGVsZXRlRHVwbGljYXRlcyhsaW5rZWRMaXN0KSE7XG5jb25zb2xlLmxvZyh1bmlxdWVMaW5rZWRMaXN0LnRvU3RyaW5nKCkpO1xuXG5leHBvcnQge31cbiJdfQ==