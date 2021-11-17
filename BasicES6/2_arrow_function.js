// ES 5
var greet = function(name, messages){
    return messages + name
}

console.log(greet('Samit', 'Hello'))

// ES 6
const arrowGreet = (name, message) => {
    return message + name
}

console.log(arrowGreet('Wichai', 'Wellcome'))

// ลดรูปได้กรณีมี Retune เพียงอย่างเดียว
const arrowGreet2 = (name, message) => message + name

console.log(arrowGreet2('Somchai','สวัสดี'))

//ยังลดรูปได้อีก กรณีมีการับ 1 พารามิเตอร์
const arrowGreet3 = message => message
console.log(arrowGreet3('Hello Ecrey one'))

//ตัวอย่าง
const square = x => x * x
console.log(square(3))

//QA
function sayHi(name){
    const result = 'Hello ' + name
    return result
}
// Answer
const sayHi2 = name => {
    const result = 'Hello ' + name
    return result
}

console.log(sayHi2('บอม'))