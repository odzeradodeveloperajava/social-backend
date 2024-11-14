const express = require('express');
const router = express.Router();
const AssetType = require('../mongodb/schemas/assetType'); // Załóżmy, że masz taki schemat

// Pobierz wszystkie typy assetów
router.get('/getAssetTypes', async (req, res) => {
    try {
        const types = await AssetType.find();
        res.json(types);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Dodaj nowy typ assetu
router.post('/addAssetType', async (req, res) => {
    const assetType = new AssetType(req.body);
    try {
        const newAssetType = await assetType.save();
        res.status(201).json(newAssetType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Usuń typ assetu
router.delete('/delAssetType', async (req, res) => {
    try {
        await AssetType.findByIdAndDelete(req.params.id);
        res.json({ message: 'Asset type deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
