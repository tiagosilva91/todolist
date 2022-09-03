const express = require('express');
const router = express.Router();
const Checklist = require('../models/checklist')

router.get('/', async (req, res) => {
    try {
        const checklists = await Checklist.find();
        res.status(200).json(checklists);
    } catch (err) {
        res.status(422).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const checklist = await Checklist.findById(id);
        res.status(200).json(checklist);
    } catch (err) {
        res.status(422).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const checklist = await Checklist.create({ name });
        res.status(200).json(checklist);
    } catch (err) {
        res.status(422).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    try {
        const checklist = await Checklist.findByIdAndUpdate(id, { name });
        res.status(200).json(checklist);
    } catch (err) {
        res.status(422).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const checklist = await Checklist.findByIdAndRemove(id);
        res.status(200).json(checklist);
    } catch (err) {
        res.status(422).json({ message: err.message });
    }
});

module.exports = router;