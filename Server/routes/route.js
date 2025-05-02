
import express from 'express';
 

const route = express.Router();


route.get('/news', () => {
    console.log('helow');
});
   
export default route;