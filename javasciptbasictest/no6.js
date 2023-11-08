/**หมุนอาร์เรย์
คำอธิบาย: ให้เขียนฟังก์ชันเพื่อหมุนอาร์เรย์ N ตำแหน่งไปทางซ้าย
ตัวอย่างข้อมูล: [1, 2, 3, 4, 5], 2
ผลลัพธ์: [3, 4, 5, 1, 2]
 */
//ทำได้แล้ว  เมื่อ  n มากกว่า arrlength


function rotate_arr(arr,n){
    for(i=1;i<=n;i++){
        arr.push(arr.shift())
    }
    console.log(arr)
}

rotate_arr([1, 2, 3, 4, 5], 6)















// function newshift(arr1, n) {
//     let newarr1 = []
//     let newarr2 = []
//     if (n <= arr1.length) {
//         for (i = 0; i < arr1.length; i++) {
//             if (i >= n) {
//                 newarr1.push(arr1[i])
//             } else {
//                 newarr2.push(arr1[i])
//             }
//         }
//         console.log(newarr1)
//         console.log(newarr2)
//         let newarr = [...newarr1, ...newarr2]
//         console.log(newarr)
//     } else {
//         let new_n = n % arr1.length
//         for (i = 0; i < arr1.length; i++) {
//             if (i >= new_n) {
//                 newarr1.push(arr1[i])
//             } else {
//                 newarr2.push(arr1[i])
//             }
//         }
//         console.log(newarr1)
//         console.log(newarr2)
//         let newarr = [...newarr1, ...newarr2]
//         console.log(newarr)
//     }
// }
// newshift([1, 2, 3, 4, 5], 9)





























// function newshift(arr1, n) {
//     let newarr1 = []
//     let newarr2 = []
//     for (i = 0; i < arr1.length; i++) {
//         if (i >= n) {
//             newarr1.push(arr1[i])
//         } else {
//             newarr2.push(arr1[i])
//         }
//     }
//     console.log(newarr1)
//     console.log(newarr2)
//     let newarr = [...newarr1, ...newarr2]
//     console.log(newarr)
// }
// //newshift([1, 2, 3, 4, 5], 3)


// Newshift([1, 2, 3, 4, 5], 3)





// function Newshift(arr1, n) {
//     let newarr1 = []     //ตัวที่ตัด
//     let newarr2 = []     //ตัวที่เหลือจากการตัด
//     if (n % arr1.length != arr1.length) {
//         newarr1.push(arr1.slice(0, n))

//         console.log(newarr1)

//     } else {

//     }