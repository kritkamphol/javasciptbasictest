/**หาค่าที่ไม่ซ้ำ
คำอธิบาย: ให้หาค่าที่ไม่ซ้ำในอาร์เรย์
ตัวอย่างข้อมูล: [3, 1, 3, 5, 2, 5, 1]
ผลลัพธ์: [3, 1, 5, 2]
 */
//ทำได้แล้วโดยใช้ set 
function find_item(arr){
    let notdupp
    notdupp = [...new Set(arr)]
    console.log(notdupp)
}

find_item([3, 1, 3, 5, 2, 5, 1])

// ทำได้แล้วครั้งที่ 1
// function find_item(arr) {
//     let result = []
//     let dup = []
//     let undup = []
//     for (i = 0; i < arr.length; i++) {
//         if (dup.indexOf(arr[i]) < 0) {
//             dup.push(arr[i])
//         } else {
//             undup.push(arr[i])
//         }

//     }
//     result.push(dup)
  
//     console.log("result:" + result)
//     console.log(typeof (dup))
// }
//find_item([3, 1, 3, 5, 2, 5, 1])