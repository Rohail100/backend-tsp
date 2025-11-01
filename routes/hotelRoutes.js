const express = require('express');
const router = express.Router();
const { getHotels } = require('../handlers/hotelHandlers');

// GET /api/hotels/ - list hotels
router.get('/', getHotels);

module.exports = router;