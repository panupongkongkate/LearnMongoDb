var express = require('express');
var router = express.Router();
const Product = require('../models/product');

//Insert
router.post('/', async (req, res) => {
    const payload = req.body;
    const product = new Product(payload);
    await product.save();
    res.status(201).end();
})

//getAll
router.get('/', async (req, res) => {
    const product = await Product.find({});
    res.json(product);
})

//getById
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
})

//update
router.put('/:id', async (req, res) => {
    const payload = req.body;
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { $set: payload });
    res.json(product);
})

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).end();
})

module.exports = router;