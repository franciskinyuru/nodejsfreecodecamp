const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt',{highWaterMark: 80000, encoding:'utf8'})
// default chunk size 64kb
// last buffer - remainder
// highWaterMark - control size of chunk
// encoding = define the encoding scheme
stream.on('data', (result)=>{
    console.log(result);
})
stream.on('error', (err)=>console.log(err))