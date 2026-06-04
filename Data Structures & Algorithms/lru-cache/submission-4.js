class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor (capacity) {
        this.cap = capacity
        this.cache = {}
        this.q = []
    }
    remove (num) {
        let idx = this.q.indexOf(num)
        this.q.splice(idx,1)
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache[key]) {
            this.remove(key)
            this.q.push(key)
            return this.cache[key]
        }

        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache[key]){
            this.remove(key)
        }
        this.q.push(key)
        this.cache[key] = value

        if (this.q.length > this.cap){
            let lru = this.q.shift()
            delete this.cache[lru]
        }
    }
}
