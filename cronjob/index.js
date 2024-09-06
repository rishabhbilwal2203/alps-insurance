const {refreshZohoAccessToken} = require('./job')

// const cron = require('node-cron');

// // Refresh token every 50 minutes
// cron.schedule('* * * * *', () => {
//     console.log('Refreshing Zoho access token...');
//     refreshZohoAccessToken();
// });


const mongoose = require('mongoose');
const cron = require('node-cron');

// Import necessary modules and functions
// const { refreshZohoAccessToken } = require('./refreshToken');  // Adjust the path as needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/zoho', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');

        // Schedule the cron job
        cron.schedule('* * * * *', () => {
            console.log('Cron job triggered - refreshing access token...');
            refreshZohoAccessToken();
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));
