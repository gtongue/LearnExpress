// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");
const dbName = "TodoApp";

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if(err){
    return console.error("Unable to connect to mongodb server");
  }
  console.log("Connected to mongodb server");
  const db = client.db(dbName);
  // db.collection("Todos").insertOne({text: "Something", completed: false}, (err, result) => {
  //   if(err){
  //     return console.error("Error inserting");
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection("Users").insertOne({name: "Garrett", age: 23, location: "San Francisco"}, (err, result) => {
  //   if(err){
  //     return console.error("Error inserting");
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  client.close();
  console.log("Connection closed");
})