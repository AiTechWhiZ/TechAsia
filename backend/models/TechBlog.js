// models/TechBlog.js
const mongoose = require('mongoose');

const TechBlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
});

const TechBlog = mongoose.model('TechBlog', TechBlogSchema);

module.exports = TechBlog;
