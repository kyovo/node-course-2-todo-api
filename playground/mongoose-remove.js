const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5855642691d39f3b69e76be2').then((todo) => {
  console.log(todo);
});
Todo.findOneAndRemove({id: '5855642691d39f3b69e76be2'}).then((todo) => {
  console.log(todo);
});
