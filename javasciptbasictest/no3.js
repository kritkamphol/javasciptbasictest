/**แปลงอาร์เรย์ของอ็อบเจกต์
คำอธิบาย: ให้แปลงอาร์เรย์ของอ็อบเจกต์ที่มีคุณสมบัติ name และ age เป็นอาร์เรย์ของสตริง
ตัวอย่างข้อมูล: [ {name: "สมชาย", age: 25}, {name: "สมหญิง", age: 30} ]
//วิธีคิด ใช้ map วงรูปแล้วรีเทิร์นออกมาเป็นค่าใหม่ตามผลลัพธ์
ผลลัพธ์: ["สมชาย อายุ 25 ปี", "สมหญิง อายุ 30 ปี"]
 */
/////ทำได้แล้ว

let name, age
let stuarr = [{ name: "สมชาย", age: 25 },
{ name: "สมหญิง", age: 30 }]
let newarr = []
for (let i = 0; i < stuarr.length; i++) {
    newarr.push([stuarr[i].name, stuarr[i].age])    
}
let lastans=[]
for(i=0;i<newarr.length;i++){
    lastans.push(newarr[i].join("อายุ")+"ปี")
}
console.log(lastans)
