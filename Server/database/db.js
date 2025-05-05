import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.bpcrs5w.mongodb.net/inshort?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error in connection to database:", error.message);
  } 
};  

export default Connection;