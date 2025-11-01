// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const staffRoutes = require('./routes/staffRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
connectDB();

app.use('/api/staff', staffRoutes);
app.use('/api/hotel', hotelRoutes);
app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('API Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
