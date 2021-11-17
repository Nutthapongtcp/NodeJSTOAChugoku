// Import วิธีที่ 2
import {sayHi, sayBye} from './say.js';

// Import วิธีที่ 2
import * as say from './say.js'

sayHi('John')
sayBye('John')

say.sayHi('Samit')
say.sayBye('Saymit')


// การ Import จาก Class ที่เป็นการ Export Default
import User from './user.js'
// สร้าง Oblect
const obj = new User('Jonhy')
console.log(obj.name)
obj.sayHi()
