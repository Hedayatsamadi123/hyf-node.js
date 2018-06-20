let fs = require('fs');
let util = require('util');

const start = new Date();
const readFileP = util.promisify(fs.readFile);

//Creating readFile promises
const readText1 = readFileP("text1.txt", "utf8");
const readText2 = readFileP("text2.txt", "utf8");
const readText3 = readFileP("text3.txt", "utf8");
const readText4 = readFileP("text4.txt", "utf8");

Promise.all([readText1, readText2, readText3, readText4]).then((data)=>{

    let arrayData = data.join(" ").replace(/(\r\n|\n|\r)/gm,"").split(" ");
    let count = {};
    arrayData.forEach(function(i) { count[i] = (count[i]||0) + 1;});  
    console.log(count);
    const end = new Date();
    console.log("Execution time is : ", (end - start));
}).catch(()=>{
    console.log("error");
});