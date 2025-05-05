import express from 'express';

import Connection from './database/db.js';

import dotenv from 'dotenv';

import DefaultData from './defaults.js';

import cors from 'cors';

import Route from './routes/route.js';

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());

app.use('/', Route);

const PORT = 8000;

// Corrected process.env usage
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

DefaultData();
