/**เรียงอาร์เรย์จากผลรวมอาร์เรย์ซ้อน
คำอธิบาย: ให้เรียงอาร์เรย์ซ้อนตามผลรวมของสมาชิกภายใน
ตัวอย่างข้อมูล: [ [1, 2, 3] , [4], [2, 3] ]
//วิธีคิด เรียงตามขนาดของArray  เช่น [4] มีขนาด1 ,  [2, 3] มีขนาด2 และ  [1, 2, 3] มีขนาด3
ผลลัพธ์: [ [4], [2, 3], [1, 2, 3] ] */


////ทำได้แล้ว โดยการใช้ sort
function sortarray(arr1, arr2, arr3) {
    let arr = []                              //[[1, 2, 3] , [4], [2, 3]]
    let length_of_arr = []
    let sortarr=[]
    arr.push(arr1, arr2, arr3)
    for (const s of arr) {
        length_of_arr.push(s.length)
    }
    length_of_arr.sort()                     // [1,2,3]
    ////console.log(length_of_arr)
    for (const item of length_of_arr) {
        arr.filter((e) => {
            if(e.length == item){
                sortarr.push(e)
            }
        })
    }console.log(sortarr)
}
    sortarray([1, 2, 3], [4], [2, 3])




////ทำได้แล้วครั้งที่ 1 แต่ได้เฉพาะสามอเรย์
// function sortarray(arr1, arr2, arr3) {
//     let arr = []
//     arr.push(arr1, arr2, arr3)
//     //let maxlength = Math.max(arr1.length, arr2.length, arr3.length)
//     //let minlength = Math.min(arr1.length, arr2.length, arr3.length)
//     //let sortarr = []
//     if(arr1.length>arr2.length && arr1.length>arr3.length){
//         if(arr2.length>arr3.length){
//             console.log(arr3,arr2,arr1)
//         }else{
//             console.log(arr2,arr3,arr1)
//         }
//     } else if (arr2.length > arr1.length && arr2.length>arr3.length) {
//         if (arr1.length > arr3.length) {
//             console.log(arr3, arr1, arr2)
//         } else {
//             console.log(arr1, arr3, arr2)
//         }
//     } else if (arr3.length > arr1.length && arr3.length > arr2.length) {
//         if (arr1.length > arr2.length) {
//             console.log(arr2, arr1, arr3)
//         } else {
//             console.log(arr1, arr2, arr3)
//         }
//     }
// }
// sortarray([1, 2, 3], [4,5,7,0], [2, 3])  




