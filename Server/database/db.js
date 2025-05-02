import mongoose from "mongoose";

const Connection = async () => {
  const URL = 'mongodb+srv://pertionaluse:DBMKM9BM0OfqeXAL@cluster0.bpcrs5w.mongodb.net/inshort?retryWrites=true&w=majority';

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