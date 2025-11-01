const express = require('express');
const router = express.Router();
const { getHotelRooms } = require('../handlers/hotelHandlers');

// GET /api/hotel/ - list hotels
router.get('/rooms', getHotelRooms);

module.exports = router;