const fs = require ("fs")
let a = fs.readFileSync("input.txt", "utf-8")

ans = a.replace(/\s+/g,' ').trim()
console.log(ans)
fs.writeFileSync("input.txt", ans)


// console.log(arr)
// let ans = "";

// for(i =0; i< arr.length; i++){
//     //console.log(a[i])
//     if(arr[i]!=" "){
//         ans = ans+arr[i];
//     }
// }

// console.log(ans)