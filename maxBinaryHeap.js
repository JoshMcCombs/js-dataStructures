class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    const idx = this.values.length - 1;
    if (idx === 0) return;
    const element = this.values[idx];
    const parentIdx = Math.floor((idx - 1) / 2);
    const parent = this.values[parentIdx];
    console.log(element, parent);
    if (element < parent) return;
    else {
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      return this.bubbleUp();
    }
  }

  insertMany(...values) {
    for (let val of values) {
      this.insert(val);
    }
  }
}
//   1  2  3  4  5  6
// [41,39,33,18,27,12,55]
//  0  1  2  3  4  5

// Ok future Josh - This is setting this.values to
// [41, 39, 55, 18, 27, 12, 33] highest number should be idx 0

let h = new MaxBinaryHeap();
h.insertMany(41,39,33,18,27,12,55);
console.log(h.values);
