const fs = require ('fs');

fs.readFile("./info.txt", "utf-8", (err, data)=> {
    if(!err){
        console.log(data);
    }else{
        throw err;
        console("file not found")
    }
})