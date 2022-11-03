
const fs = require('fs');


// Reading Files 

// fs.readFile('./Docs/blog.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data.toString());
// });

// console.log("Last Line");



// Writing Files

// fs.writeFile('./Docs/blog.txt','Hello , World',()=>{
//     console.log('file Written');
// });



// fs.writeFile('./Docs/blog1.txt','Hello , World',()=>{
//     console.log('file Written');
// });



// directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(error)=>{
        if(error){
            console.log(error);
        }
        console.log("file Created");
    })
}else{
    fs.rmdir('./assets',(error)=>{
        if(error){
            console.log(error);
        }
        console.log('files deleted')
    })
}




// deleting files 

if(fs.existsSync('./Docs/delete.txt')){
    fs.unlink('./Docs/delete.txt',(error)=>{
        if(error){
            console.log(error);
        }
        console.log("file deleted");
    })
}
