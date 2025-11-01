const express = require('express');
const router = express.Router();
const { getStaffs } = require('../handlers/staffHandlers');

// GET /api/staff/  - list staff
router.get('/', getStaffs);

module.exports = router;