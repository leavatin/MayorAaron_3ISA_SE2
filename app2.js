var fs = require("fs");
fs.mkdir("./data", function (err){
    if(err){
        console.log ("test directory created");
    } else {
        console.log ("failed to create test directory...");
    }
});

var readStream = fs.createReadStream("./info.txt");
var writeStream = fs.createWriteStream("./data/info2.txt");
readStream.pipe(writeStream);

fs.readFile("./data/info2.txt", "utf-8", (err, data)=> {
    if(!err){
        console.log(data);
    }else{
        throw err;
    }
});