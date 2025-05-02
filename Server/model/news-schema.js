import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  url: {
    type: String, // Fixed typo here
    required: true,
    unique: true, // Ensure URL is unique
  },

  timestamp: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },

  publisher: {
    type: String,
    required: true,
  },
});

const news = mongoose.model('news', newsSchema);

export default news;