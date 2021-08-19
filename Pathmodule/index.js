const path= require('path');

// console.log(path.basename('F:\NODEJS\NodeJs-tuts\Pathmodule/index.js'));// filename
// console.log(path.dirname('F:/NODEJS/NodeJs-tuts/Pathmodule/index.js'));// direcory details
// console.log(path.extname('F:\NODEJS\NodeJs-tuts\Pathmodule/index.js')); // extension name

const obj = path.parse('F:\NODEJS\NodeJs-tuts\Pathmodule/index.js'); // all above steps returned at once in object format
console.log(obj.root);
console.log(obj.dir);
console.log(obj.ext);
console.log(obj.base);
console.log(obj.name);
