const Appointment = require('../models/Appointment');

const getAppointments = async (req, res) => {
  try {
    const appointmentsFromDb = await Appointment.find();
    res.json(appointmentsFromDb);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

const createAppointment = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    type,
    room,
    checkIn,
    checkOut,
    message,
  } = req.body || {};

  if (!firstName || !lastName || !email || !phone || !type || !room || !checkIn || !checkOut) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const appointment = new Appointment({
      firstName,
      lastName,
      email,
      phone,
      type,
      room,
      checkIn,
      checkOut,
      message,
    });
    const saved = await appointment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create appointment' });
  }
};

module.exports = {
  getAppointments,
  createAppointment,
};