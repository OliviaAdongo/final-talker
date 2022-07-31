const express = require ('express');
const socket =require('socket.io')
const app = express();
const cors = require ('cors');

app.use(cors());

const server = app.listen('3002', ()=> console.log('Server running on port 3002!!!'))