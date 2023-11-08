/**ผลรวมของอาร์เรย์ซ้อน
คำอธิบาย: ให้หาผลรวมของตัวเลขทั้งหมดในอาร์เรย์ซ้อน
ตัวอย่างข้อมูล: [ [1, 2] , [3, 4, 5] , [6] ]
//วิธีคิด 1+2+3+4+5+6 = 21
ผลลัพธ์: 21
 * 
 */
//ทำได้แล้ว โดยใช้ reduce method
function sum([x,y,z]){
    let allarray=[...x,...y,...z]
    let sums=allarray.reduce((acu,prev)=> acu+prev,0)
    console.log(sums)
}
sum([[1, 2], [3, 4, 5], [6]])



//ทำครั้งแรกโดยไม่ได้ใช้ reduce
// function sum([x,y,z]){
//     let allarray=[...x,...y,...z]
//     //console.log(allarray)
//     let output=0
//     for(i=0;i<allarray.length;i++){
//         output = output+allarray[i]
//     }
//     console.log(output)
    
// }
// sum([[1, 2], [3, 4, 5], [6]])






