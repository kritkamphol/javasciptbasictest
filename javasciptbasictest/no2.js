/**หาสมาชิกที่ซ้ำกัน
คำอธิบาย: ให้หาสมาชิกที่ซ้ำกันระหว่างอาร์เรย์สองอัน
ตัวอย่างข้อมูล: [1, 2, 3, 4] , [3, 4, 5, 6]
//วิธีคิด นำมาแค่ตัวที่มีอยู่ในทั้ง 2 array คือ 3,4
ผลลัพธ์: [3, 4]
 */
//ทำได้แล้ววว โดยใช้ filter และ includes

function diff(arr1,arr2){
    let diffarr=[]
    arr1.filter((item)=>{
        if(arr2.includes(item)){
            diffarr.push(item)
        }
    })
    console.log(diffarr)
}
diff([1, 2, 3, 4], [3, 4, 5, 6])






//ทำได้แล้วครั้งแรก
// function diff(arr1, arr2) {
//     let diffarr = []
//     for (i = 0; i < arr1.length; i++) {
//         for (j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 diffarr.push(arr1[i])
                
//             }
//         }
//     }
//     console.log(diffarr)
// }
// diff([1, 2, 3, 4], [3, 4, 5, 6])