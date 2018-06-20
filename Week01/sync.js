

const fs = require("fs");
const start = new Date(); 


const text1Data = fs.readFileSync("text1.txt", "utf8");
const text2Data = fs.readFileSync("text2.txt", "utf8");
const text3Data = fs.readFileSync("text3.txt", "utf8");
const text4Data = fs.readFileSync("text4.txt", "utf8");

let totalData = text1Data + text2Data + text3Data + text4Data ;

let newDataArray = totalData.replace(/(\r\n|\n|\r)/gm, "").split(" ");
 console.log(newDataArray);
var count = {};
newDataArray.forEach(function(i) {
  count[i] = (count[i] || 0) + 1;       
});

console.log(count);
const end = new Date();  
console.log("Execution time is : ", (end - start));
