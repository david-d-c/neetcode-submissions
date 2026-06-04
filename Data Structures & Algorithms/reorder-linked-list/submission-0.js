/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let nodeList = [], cur = head
        while(cur){
            nodeList.push(cur)
            cur = cur.next
        }
        let l = 1, r = nodeList.length - 1, flag = true
        cur = head
        while(l <= r){
            if(flag) {
                cur.next = nodeList[r]
                r--
            }
            else {
                cur.next = nodeList[l]
                l++
            }
            cur = cur.next
            flag = !flag
        }
        cur.next = null
        return head
    }
}
