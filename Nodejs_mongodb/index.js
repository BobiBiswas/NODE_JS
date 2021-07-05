var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";  //Atlas connection


var url = "mongodb://127.0.0.1:27017/";  //local server
var config = { useUnifiedTopology: true };
MongoClient.connect(url, config,function(err, db) {
  if (err) throw err;
  else console.log("connection success");
  var dbo = db.db("school");

//INSERT DATA
  var myobj = [
                { name: "bobi", roll:"12",class:"ten",city:"dhaka"},
                  {name: "seju", roll:"42",class:"nine",city:"ekkka"},
                {name: "ritu", roll:"32",class:"eight",city:"dhaaj"} 
               
            ];
  dbo.collection("students").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(" document inserted");
    db.close();
  });


//delete data
// var myquery = {city:"dhaaj"};
// dbo.collection("students").deleteOne(myquery, function(err, Obj) {
//     if (err) throw err;
//     console.log(Obj.result.n+" document deleted");
//     db.close();
//   });



//find one data
// //var myquery = {city:"dhaaj"};
// dbo.collection("students").find({}) .toArray( function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });



//projection node

// var ItemObj ={};
// var ItemProjection ={projection:{class:"",roll:""}};

// dbo.collection("students").find(ItemObj,ItemProjection) .toArray( function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });


// //query function

// var query ={class:"eight",roll:"32"};


// dbo.collection("students").find(query) .toArray( function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });



//limit function

// dbo.collection("students").find().limit(10) .toArray( function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });




//sort pattern
// var SortPattern ={roll:-1};


// dbo.collection("students").find().sort( SortPattern) .toArray( function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });



//update data
// var MyQuery = {roll:"32"};
// var MyNewvalue ={$set :{name:"bobi biswas",class:"eleven"}};


// dbo.collection("students").updateOne(MyQuery,MyNewvalue, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });


 });
