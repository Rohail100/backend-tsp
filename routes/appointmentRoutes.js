const express = require('express');
const router = express.Router();
const { getAppointments, createAppointment } = require('../handlers/appointmentHandlers');

// GET /api/appointments/ - list appointments
router.get('/', getAppointments);

// POST /api/appointments/ - create appointment
router.post('/', createAppointment);

module.exports = router;