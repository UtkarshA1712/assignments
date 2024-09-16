const fs = require("fs")
let a = fs.readFile("sampleText.txt", "utf-8", function(err,data){
    //console.log("inside readfile")
    console.log(data)
});
let b = 0;
for(let i = 0; i< 1; i++){
    b++;
}
console.log(b)