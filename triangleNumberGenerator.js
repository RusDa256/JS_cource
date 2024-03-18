function* getTriangleNumber() {
  for(let i = 0;; ++i) {
    yield i*(i+1)/2
  }
}

let triangleNumber = getTriangleNumber()

console.log(triangleNumber.next())
console.log(triangleNumber.next())
console.log(triangleNumber.next())
console.log(triangleNumber.next())
console.log(triangleNumber.next())
console.log(triangleNumber.next())
console.log(triangleNumber.next())
console.log(triangleNumber.next())