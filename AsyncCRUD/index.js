const fs = require("fs");//1. importing filesystem module

// fs.mkdir("akartik",(err)=>{
//     console.log('folder created');
// });//2.  make directory aamed 'akartik' in AyncCRUD folder

// fs.writeFile("akartik/CrudASYNC.txt", "Hii, this is my first file system crud challenge.",(err)=>{
//     console.log('files created');
// }); //3. creating text file and writing data into it

// fs.appendFile("./akartik/CrudASYNC.txt", " This is my second line", (err)=>{
//     console.log('files data appended');
// });//4.adding existing data at end

// fs.readFile("./akartik/CrudASYNC.txt","utf-8",(err, data)=>{
//     console.log(data);
//     console.log(err);
// }); //5. getting data without buffer data using utf-8

// fs.rename("./akartik/CrudASYNC.txt", "./akartik/CrudASync.txt", (err)=>{
//     console.log(err);
// });// 6. rename existing file name

// fs.unlink("./akartik/CrudASync.txt",(err)=>{
//     console.log(err);
// }); // 7. Deleting file

fs.rmdir("./akartik",(err)=>{
    console.log(err);
}); //8. removing/deleting directory