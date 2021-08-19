const os = require('os');
console.log(os.arch()); // architecture
console.log(os.hostname()); // host 
console.log(os.platform()); // platform
console.log(os.tmpdir()); //temp directory
console.log(os.type()); // os type
console.log(`${os.totalmem()/1024/1024/1024}`); //total ram memory
console.log(`${os.freemem()/1024/1024/1024}`); // free memory