/**แปลงอาร์เรย์ของอ็อบเจกต์
คำอธิบาย: ให้แปลงอาร์เรย์ของอ็อบเจกต์ที่มีคุณสมบัติ name และ age เป็นอาร์เรย์ของสตริง
ตัวอย่างข้อมูล: [ {name: "สมชาย", age: 25}, {name: "สมหญิง", age: 30} ]
//วิธีคิด ใช้ map วนรูปแล้วรีเทิร์นออกมาเป็นค่าใหม่ตามผลลัพธ์
ผลลัพธ์: ["สมชาย อายุ 25 ปี", "สมหญิง อายุ 30 ปี"]
 */
/////ทำได้แล้ว

let users = [{ name: "สมชาย", age: 25 },
{ name: "สมหญิง", age: 30 }]

let profile = users.map(e=>{
   return e.name+" "+"อายุ"+" "+e.age+" "+"ปี"
})
console.log(profile)

// let student_profile =profile.map(([name,age])=>{
//     return name+" "+"อายุ"+age+" "+"ปี"
// })

//console.log(student_profile(profile))








//ทำได้แล้วครั้งที่ 1
// let name, age
// let stuarr = [{ name: "สมชาย", age: 25 },
// { name: "สมหญิง", age: 30 }]
// let newarr = []
// for (let i = 0; i < stuarr.length; i++) {
//     newarr.push([stuarr[i].name, stuarr[i].age])
// }
// let lastans=[]
// for(i=0;i<newarr.length;i++){
//     lastans.push(newarr[i].join("อายุ")+"ปี")
// }
// console.log(lastans)
