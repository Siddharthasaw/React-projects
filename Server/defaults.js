import {data} from "./constents/data.js";

import News from "./model/news-schema.js";


const DefaultData = async () => {
    try {
      
        await News.insertMany(data);
        console.log("Default data inserted successfully");

    } catch (error) {
        console.log("Error while inserting default data", error.message);
    }
} 

export default DefaultData;