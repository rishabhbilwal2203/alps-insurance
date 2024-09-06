const axios = require('axios');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// Zoho API credentials
const clientId = '1000.AFV0S9IGK7I6WQCZHLINW6G22L76FL';
const clientSecret = '47acb15097d17899c4d957870984e9a39243c638bf';
const refreshToken = '1000.f52c7415c71434272ddbdc6030477b0b.27e3d57b1d159b6c9b6228155b513f49';

const accessTokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
});

const TokenModel = mongoose.model('AccessToken', accessTokenSchema);


async function refreshZohoAccessToken() {
    const url = 'https://accounts.zoho.in/oauth/v2/token';

    const params = new URLSearchParams({
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
    });

    try {
        console.log('Job is started');
        const response = await axios.post(url, params);
        const accessToken = response.data.access_token;
        console.log('New access token:', accessToken);

        // Hash the access token
        // const salt = await bcrypt.genSalt(10);
        // const hashedToken = await bcrypt.hash(accessToken, salt);

        // Store the hashed token in MongoDB
        await TokenModel.findOneAndUpdate(
            {}, // Since there's only one token, find any existing one
            { token: accessToken, updatedAt: new Date() },
            { upsert: true } // Insert if not found, otherwise update
        );

        console.log('Access token hashed and stored in MongoDB');
    } catch (error) {
        console.error('Error refreshing access token:', error);
    }

    // try {
    //     console.log("job is started")
    //     const response = await axios.post(url, params);
    //     const accessToken = response.data.access_token;
    //     console.log('New access token:', accessToken);
        
    //     // Save the access token in your database, environment variable, or cache
    // } catch (error) {
    //     console.error('Error refreshing access token:', error);
    // }
}

module.exports = { refreshZohoAccessToken };