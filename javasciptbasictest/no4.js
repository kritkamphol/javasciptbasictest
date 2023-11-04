/**เรียงอาร์เรย์จากผลรวมอาร์เรย์ซ้อน
คำอธิบาย: ให้เรียงอาร์เรย์ซ้อนตามผลรวมของสมาชิกภายใน
ตัวอย่างข้อมูล: [ [1, 2, 3] , [4], [2, 3] ]
//วิธีคิด เรียงตามขนาดของArray  เช่น [4] มีขนาด1 ,  [2, 3] มีขนาด2 และ  [1, 2, 3] มีขนาด3
ผลลัพธ์: [ [4], [2, 3], [1, 2, 3] ] 
 */
////ทำได้แล้วแต่ได้เฉพาะสามอเรย์
function sortarray(arr1, arr2, arr3) {
    let arr = []
    arr.push(arr1, arr2, arr3)
    //let maxlength = Math.max(arr1.length, arr2.length, arr3.length)
    //let minlength = Math.min(arr1.length, arr2.length, arr3.length)
    //let sortarr = []
    if(arr1.length>arr2.length && arr1.length>arr3.length){
        if(arr2.length>arr3.length){
            console.log(arr3,arr2,arr1)
        }else{
            console.log(arr2,arr3,arr1)
        }
    } else if (arr2.length > arr1.length && arr2.length>arr3.length) {
        if (arr1.length > arr3.length) {
            console.log(arr3, arr1, arr2)
        } else {
            console.log(arr1, arr3, arr2)
        }
    } else if (arr3.length > arr1.length && arr3.length > arr2.length) {
        if (arr1.length > arr2.length) {
            console.log(arr2, arr1, arr3)
        } else {
            console.log(arr1, arr2, arr3)
        }
    }
}
sortarray([1, 2, 3], [4,5,7,0], [2, 3])  




