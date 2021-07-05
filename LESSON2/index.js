const fs = require('fs');

// fs.writeFile('demo1.txt',"this is sample",function(err){
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("successful");
//     }
// })



// fs.appendFile('demo1.txt'," .this is new sample",(err)=>{
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("successful");
//     }
// })


// fs.readFile('demo1.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })


// fs.rename('demo2.txt',"demo1.txt",(err)=>{
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("successful");
//     }
// })



// fs.unlink('demo2.txt',(err)=>{
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("success");
//     }
// })


fs.exists('demo2.txt',(result)=>{
    if(result){
        console.log("found");

    }
    else{
        console.log("not found");
    }
})