var express = require('express');
var router = express.Router();
const Todo = require('../models/Todo');

//Insert
router.post('/', async (req, res) => {
    const payload = req.body;
    const todos = new Todo(payload);
    await todos.save();
    res.status(201).end();
})

//getAll
router.get('/', async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
})

//getById
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const todos = await Todo.findById(id);
    res.json(todos);
})

//update
router.put('/:id', async (req, res) => {
    const payload = req.body;
    const { id } = req.params;
    const todos = await Todo.findByIdAndUpdate(id, { $set: payload });
    res.json(todos);
})

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).end();
})

module.exports = router;