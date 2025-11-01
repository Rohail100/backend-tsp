let hotels = [
  { id: 1, name: 'Seaside Inn', location: 'Beach' },
  { id: 2, name: 'Mountain Lodge', location: 'Hills' },
];

function getHotels(req, res) {
  res.json(hotels);
}

module.exports = {
  getHotels,
};