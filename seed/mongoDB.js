const mongoose = require('mongoose');
const Staff = require('../models/Staff');
const HotelRoom = require('../models/HotelRoom');

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hotel_management';

const staffs = [
    { name: 'John Doe', role: 'Chef Master' },
    { name: 'Maria Lopez', role: 'Room Cleaner' },
    { name: 'Alice Smith', role: 'Assistant Chef' },
    { name: 'David Kim', role: 'Supervisor' }
].map(s => ({
    ...s,
    image: `https://placehold.co/500x500/ddd/666?text=${encodeURIComponent(s.name)}`
}));
const hotelRooms = [
    {
        title: 'Deluxe Room',
        pricePerNight: 150,
        maxGuests: 2,
        beds: 1,
        baths: 1,
        description: 'Comfortable deluxe room with city view, queen bed, and modern amenities.',
        imageUrl: `https://placehold.co/800x600/ddd/666?text=${encodeURIComponent('Deluxe Room')}`
    },
    {
        title: 'Junior Room',
        pricePerNight: 100,
        maxGuests: 2,
        beds: 1,
        baths: 1,
        description: 'Cozy junior room ideal for solo travelers or couples.',
        imageUrl: `https://placehold.co/800x600/ddd/666?text=${encodeURIComponent('Junior Room')}`
    },
    {
        title: 'Family Room',
        pricePerNight: 220,
        maxGuests: 4,
        beds: 2,
        baths: 1,
        description: 'Spacious family room with two beds, perfect for small families.',
        imageUrl: `https://placehold.co/800x600/ddd/666?text=${encodeURIComponent('Family Room')}`
    }
];

(async function seedAll() {
    let exitCode = 0;
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB:', MONGO_URI);

        // HotelRoom seeding
        const hrDeleted = await HotelRoom.deleteMany({});
        console.log('Deleted HotelRoom documents count:', hrDeleted.deletedCount);

        const hrInserted = await HotelRoom.insertMany(hotelRooms);
        console.log('Inserted hotel room count:', hrInserted.length);
        hrInserted.forEach(doc => console.log(`- ${doc.title} ($${doc.pricePerNight}/night)`));

        // Staff seeding
        const staffDeleted = await Staff.deleteMany({});
        console.log('Deleted Staff documents count:', staffDeleted.deletedCount);

        const staffInserted = await Staff.insertMany(staffs);
        console.log('Inserted staff count:', staffInserted.length);
        staffInserted.forEach(doc => console.log(`- ${doc.name} (${doc.role})`));
    } catch (err) {
        console.error('Seeding error:', err);
        exitCode = 1;
    } finally {
        try {
            await mongoose.connection.close();
            console.log('MongoDB connection closed.');
        } catch (closeErr) {
            console.error('Error closing MongoDB connection:', closeErr);
            exitCode = 1;
        }
        process.exit(exitCode);
    }
})();
