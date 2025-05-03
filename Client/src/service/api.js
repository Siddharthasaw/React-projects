import axios from 'axios';

export const getNews = async () => {
    const URL = "http://localhost:8000/";

    try {
        return await axios.get(`${URL}news`);
    } catch (error) {
        console.log('Error while calling get news API', error);
    }
}