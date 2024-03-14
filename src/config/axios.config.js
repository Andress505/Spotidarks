/**
* @license Apache-2.0
*@copyright mi nombre
*/

'use strict';

const axios = require('axios').default;
const querystring = require('querystring');

const apiConfig = require('./api.config');

const token = axios.create({
    baseURL: apiConfig.TOKEN_BASE_URL,
    headers: {
        'Authorization': `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64'))}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

module.exports = {
    token
}