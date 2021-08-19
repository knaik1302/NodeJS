const fs = require('fs');

const mydata = {
    name : "kartik",
    class : "5th B",
    age : 21,
    Reg : 75,
    Clg : "NMAM INSTITUTE OF TECHNOLOGY, NITTE",
}

// console.log(mydata);
const jsondata = JSON.stringify(mydata); // to convert obj data to json data 

// fs.writeFile('./json.json', jsondata, (err) => {
//     console.log("json file updated");
// });
fs.readFile('./json.json',"utf-8", (err, data ) => {
    const jsdata = data;
    const objdata = JSON.parse(jsdata); 
    console.log(objdata);
})

// const objdata = JSON.parse(jsondata); // to convert json data to obj data
// console.log(objdata);