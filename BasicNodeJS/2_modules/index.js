//Import from utils.js
const utils = require('./utils')

//`Import from utils.js แบบที่ 2
const {calculateVat, sayHello} = require('./utils')

//เรียกใช้ฟังก์ชันใน utils.js
utils.sayHello()
const vat = utils.calculateVat(100,7)
console.log(vat)

// Destructuring
sayHello()
const vat2 = calculateVat(200,7)
console.log(vat2)
