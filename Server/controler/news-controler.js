import { response } from "express";
import News from "../model/news-schema.js";

export const getNews = async (req, res) => {
    try {
        let data = await News.find({});
        res.status(200).json(data); // Use 'res' to send the response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Use 'error.message' for the error response
    }
};

