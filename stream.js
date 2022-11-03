
const fs = require('fs');

const readstream = fs.createReadStream('./Docs/blog2.txt',{encoding:'utf8'});
const writestream = fs.WriteStream('./Docs/blog3.txt');

// readstream.on('data',(chunk)=>{
//     console.log('------ NEW CHUNK -------');
//     console.log(chunk);
//     writestream.write('\n---NEW CHUNK----\n');
//     writestream.write(chunk);
// })


// piping 
// reading from one file and write it to another file

readstream.pipe(writestream);