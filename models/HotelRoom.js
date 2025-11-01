const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the schema for Hotel rooms
const hotelRoomsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    pricePerNight: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
    },
    maxGuests: {
        type: Number,
        required: true,
        min: [1, 'Must allow at least 1 guest']
    },
    beds: {
        type: Number,
        required: [true],
        min: [1, 'Must have at least 1 bed']
    },
    baths: {
        type: Number,
        required: true,
        min: [0, 'Number of baths cannot be negative']
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('HotelRoom', hotelRoomsSchema);

