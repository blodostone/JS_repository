 export const wallet = {
     transactions: [4, 2, 6, 324, -32, 4],
     getMax() {
         return Math.max(...this.transactions)
     },
     getMin() {
         return Math.min(...this.transactions)
     },
 };