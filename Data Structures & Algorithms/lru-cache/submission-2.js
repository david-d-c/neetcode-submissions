class Node {
    constructor(key, val){
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
        this.cache = {}

        this.lru = new Node(0,0)
        this.mru = new Node(0,0)

        this.lru.next = this.mru
        this.mru.prev = this.lru
        
    }

    remove(node){
        
        let prev = node.prev, next = node.next

        prev.next = next
        next.prev = prev
    }

    insert(node){
        let mruPrev = this.mru.prev

        mruPrev.next = node
        this.mru.prev = node
        node.prev = mruPrev
        node.next = this.mru

    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache[key]) {
            //remove
            this.remove(this.cache[key])
            //insert as mru
            this.insert(this.cache[key])

            return this.cache[key].val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache[key]){
            this.cache[key].val = value
            this.remove(this.cache[key])
            this.insert(this.cache[key])
            return
        }
        this.cache[key] = new Node(key,value)
        this.insert(this.cache[key])
        
        if(Object.keys(this.cache).length > this.cap){
            let lru = this.lru.next
            this.remove(lru)
            delete this.cache[lru.key]
        }
    }
}
