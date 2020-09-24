const express = require('express');
const ConnectDetails = require('../models/connectDetails');
const router = new express.Router();

router.post('/api/connectDetails', async (req, res) => {
    const detail = new ConnectDetails(req.body);
    try {
        await detail.save();
        res.status(201).send(detail);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/api/connectDetails', async (req, res) => {
    try {
        const details = await ConnectDetails.find({});
        res.status(201).send(details);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;