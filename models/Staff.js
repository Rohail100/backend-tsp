const mongoose = require('mongoose');

// Define the schema for Staff members
const StaffsSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true }, // use "role" for role/title
    image: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Staff', StaffsSchema);
