async function longerFun(a, b) {
  let c = a * 1000
  let d = a ** b
  return c + d
}

function hello() {
  console.log("Hello world!")
}

console.log("Начало программы")
setTimeout(hello, 500)
console.log("ЭТАП 1")

console.log(longerFun(101, 9)
.then(result => {
  console.log("Успешно посчитано - " + result); }
  )
)

console.log("ЭТАП 2")
setTimeout(hello, 5000)
console.log("Конец программы!!!")