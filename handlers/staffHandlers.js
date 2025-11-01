const Staff = require('../models/Staff');

async function getStaffs(req, res) {
  try {
    const staffs = await Staff.find();
    res.json(staffs);
  } catch (err) {
    console.error('Error fetching staffs:', err);
    res.status(500).json({ error: 'Failed to fetch staffs' });
  }
}

module.exports = {
  getStaffs,
};