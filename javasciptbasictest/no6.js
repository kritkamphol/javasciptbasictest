/**หมุนอาร์เรย์
คำอธิบาย: ให้เขียนฟังก์ชันเพื่อหมุนอาร์เรย์ N ตำแหน่งไปทางซ้าย
ตัวอย่างข้อมูล: [1, 2, 3, 4, 5], 2
ผลลัพธ์: [3, 4, 5, 1, 2]
 */
//ทำได้แล้ว

function newshift(arr1,n){
    let newarr1=[]
    let newarr2=[]
     for(i=0;i<arr1.length;i++){
        if(i>=n){
        newarr1.push(arr1[i])
    }else{
        newarr2.push(arr1[i])
    }
}
console.log(newarr1)
console.log(newarr2)
let newarr = [...newarr1,...newarr2]
console.log(newarr)
}
newshift([1, 2, 3, 4, 5], 3)