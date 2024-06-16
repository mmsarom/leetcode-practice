/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* JS example to refactor to TS
var addTwoNumbers = function(l1, l2) {

    let value = 0;
    let carry = false;
    

    if (l1 != null || l2 != null) {
        console.log(`${l1?.val} & ${l2?.val}`);
        if(l1?.val) {
            value += l1.val;
        }
        if(l2?.val) {
            value += l2.val;
        }
        console.log(value)
        
        if (value >= 10) {
            value -= 10;
            carry = true;
        }
        
        if (l2?.next != null && carry == 1) {
            l2.next.val += 1;
        } else if (l1?.next != null && carry == 1) {
            l1.next.val += 1;
        } else if (carry == 1) {
            return new ListNode(value,new ListNode(1,null));
        }

        return new ListNode(value,addTwoNumbers(l1?.next, l2?.next));
    }
};
*/