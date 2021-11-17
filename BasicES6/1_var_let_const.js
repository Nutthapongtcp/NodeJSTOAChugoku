// //ปัญหาของการใช้ var
// var fname = "John"
// {
//     var fname = "Jany"
// }

// console.log(fname)   

// // ตัวอย่างปัญหาอื่นๆ ที่เกิดจากการใช้ var
// var messages = ['Hello','Javascript','es2015'] // ตัวแปร array
// // ลองทำการวนลูปอ่านสมาชิก
// for(var i=0; i<=messages.length; i++){
//     // console.log(i)

//     //กำหนดให้แสดงผลโดยการหน่วงเวลาไว้ 1 วินาที
//     setTimeout(function(){
//         console.warn(i)
//         console.warn(messages[i])
//     }, 1000)
// }

// การใช้งาน let
let fullname = "John"
{
    let fullname = "Jany"
    console.log(fullname)
}

console.log(fullname)

fullname = "Joey"

console.log(fullname)

//การใช้งาน const
const firstname = "Samit"
// ลองเปลี่ยนค่าตัวแปรแบบ const
// firstname = "Somchai" // error เปลี่ยนค่าไม่ได้
console.log(firstname)