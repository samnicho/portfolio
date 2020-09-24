const express = require('express');
const PageContent = require('../models/pageContent');
const router = new express.Router();

router.post('/api/pageContent', async (req, res) => {
    const content = new PageContent(req.body);
    try {
        await content.save();
        res.status(201).send(content);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/api/pageContent/:title', async (req, res) => {
    const title = req.params.title;
    try {
        const content = await PageContent.find({ title });

        if (!content) {
            return res.status(404).send('Content not found!');
        }

        res.send(content);
    } catch (error) {
        res.send(500).send(error);
    }
});

module.exports = router;