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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //let node = new ListNode(null), cur1 = list1, cur2 = list2
        let nodeVals = [], c1 = list1, c2 = list2
        while(c1){
            nodeVals.push(c1.val)
            c1 = c1.next
        }while(c2){
            nodeVals.push(c2.val)
            c2 = c2.next
        }
        console.log(list1)
        let sortedArr = nodeVals.sort((a,b) => a - b)
        //console.log(sortedArr)
        if(nodeVals.length == 0) return list1
        let sortedHead = new ListNode(nodeVals[0]), curr = sortedHead
        for(let i = 1; i < nodeVals.length; i++){
            let node = new ListNode(nodeVals[i])
            curr.next = node
            curr = curr.next
        }
        return sortedHead

    }
}
