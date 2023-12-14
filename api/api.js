const axios = require('axios');
//const config = require('../config');
const token = process.env.TOKEN;

const api = axios.create({
  baseURL: 'https://api.dropboxapi.com/2/',
  headers: {
    //'Authorization': `Bearer ${config.accessToken}`,
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

module.exports = api;