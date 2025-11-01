const HotelRoom = require('../models/HotelRoom');

async function getHotelRooms(req, res) {
    try {
      const rooms = await HotelRoom.find();
      res.json(rooms);
    } catch (err) {
      console.error('Failed to get hotel rooms:', err);
      res.status(500).json({ error: 'Failed to fetch hotel rooms' });
    }
  }


module.exports = {
  getHotelRooms,
};