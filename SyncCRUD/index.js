const fs = require("fs");//1. importing filesystem module

// fs.mkdirSync("kartik"); //2.  make directory aamed 'kartik' in SyncCRUD folder

// fs.writeFileSync("kartik/CrudSYNC.txt", "Hii, this is my first file system crud challenge."); //3. creating text file 
// and writing data into it

// fs.appendFileSync("kartik/CrudSYNC.txt", " This is my second line");//4.adding existing data at end

// const data = fs.readFileSync("kartik/CrudSYNC.txt","utf-8"); //5. getting data without buffer data using utf-8
// console.log(data);

// fs.renameSync("kartik/CrudSYNC.txt", "kartik/CrudSync.txt");// 6. rename existing file name

// fs.unlinkSync("kartik/CrudSYNC.txt"); // 7. Deleting file

// fs.rmdirSync("./kartik"); //8. deleting/removing directory