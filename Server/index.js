
import express from 'express';

import Connection from './database/db.js';

import DefaultData from './defaults.js';


import Route from './routes/route.js';
     
const app = express();

app.use('/', Route);

const PORT = 8000;

Connection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

DefaultData();
