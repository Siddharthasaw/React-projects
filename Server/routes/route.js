import express from 'express';
import { getNews } from '../controler/news-controler.js';

const route = express.Router();

route.get('/news', getNews);

export default route;