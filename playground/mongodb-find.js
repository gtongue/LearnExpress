const MongoClient = require("mongodb").MongoClient;
const dbName = "TodoApp";


MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if(err){
    return console.error("Unable to connect to mongodb server");
  }
  console.log("Connected to mongodb server");
  const db = client.db(dbName);

  // db.collection("Todos").find({completed: false}).toArray().then((documents) => {
  //   console.log("Todos:");
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  db.collection("Todos").find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log("Unable to fetch todos", err);
  });

  // client.close();
  // console.log("Connection closed");
})