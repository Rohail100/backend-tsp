let appointments = [
  { id: 1, guest: 'Charlie', time: '2025-11-02T10:00:00Z' },
];

function getAppointments(req, res) {
  res.json(appointments);
}

function createAppointment(req, res) {
  const { guest, time } = req.body || {};
  if (!guest || !time) {
    return res.status(400).json({ error: 'guest and time are required' });
  }
  const newAppointment = { id: Date.now(), guest, time };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
}

module.exports = {
  getAppointments,
  createAppointment,
};