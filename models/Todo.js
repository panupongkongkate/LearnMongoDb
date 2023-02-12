const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoNameSchema = new Schema({
    TodoName: String,
});

const Todoodel = mongoose.model('Todo', TodoNameSchema);

module.exports = Todoodel;