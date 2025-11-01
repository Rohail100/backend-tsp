const express = require('express');
const router = express.Router();
const { getStaff } = require('../handlers/staffHandlers');

// GET /api/staff/  - list staff
router.get('/', getStaff);

module.exports = router;