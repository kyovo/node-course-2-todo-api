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

  //deleteMany
  db.collection('Todos').deleteMany({text: 'Eat-lunch'}).then((result) => {
    console.log(result);
  });
  //deleteOne
  db.collection('Todos').deleteOne({text: 'Eat lunch')}.then(result) => {
    console.log(result);
  });
  //findOne&Delete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });
  // db.close();
});
