class MinStack {
    constructor() {
        this.stack = []
        this.mins = [Infinity]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(val <= this.mins.at(-1)) this.mins.push(val)
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        let removed = this.stack.pop()
        if(removed === this.mins.at(-1)) this.mins.pop()
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        let top = this.mins.at(-1)

        if(top === Infinity) return 0
        else return top
    }
}
