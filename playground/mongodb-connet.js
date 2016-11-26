// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//sacar variables de un objeto
// var user = {name: 'david', age:20};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:12345/TodoApp', (err, db)=>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name: 'David',
  //   age: 19,
  //   location: 'Philadelphia'
  // }, (err, result) =>{
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
