var express = require('express');
var router = express.Router();
// mock data
const products = [
    {
        id: '1001',
        name: 'Node.js for Beginners',
        category: 'Node',
        price: 990
    },
    {
        id: '1002',
        name: 'React 101',
        category: 'React',
        price: 3990
    },
    {
        id: '1003',
        name: 'Getting started with MongoDB',
        category: 'MongoDB',
        price: 1990
    }
];

router.get('/', (req, res) => {
    res.json(products);
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const result = products.find(products => products.id === id);
    res.json(result);
})
router.post('/', (req, res) => {
    const payload = req.body;
    res.json(payload)
})
router.put('/:id',(req,res)=>{
    const {id} = req.params 
    res.json(id)
})
router.delete('/:id',(req,res)=>{
    const {id} = req.params
    res.json(id)
})

module.exports = router;

