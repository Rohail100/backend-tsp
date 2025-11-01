let staff = [
  { id: 1, name: 'Alice', role: 'Manager' },
  { id: 2, name: 'Bob', role: 'Reception' },
];

function getStaff(req, res) {
  res.json(staff);
}

module.exports = {
  getStaff,
};