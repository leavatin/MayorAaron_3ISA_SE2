var fs = require("fs");
var readStream = fs.createReadStream("./info.txt");
var writeStream = fs.createWriteStream("./info2.txt");
readStream.pipe(writeStream);

fs.readFile("./info2.txt", "utf-8", (err, data)=> {
    if(!err){
        console.log(data);
    }else{
        throw err;
        console("file not found")
    }
})