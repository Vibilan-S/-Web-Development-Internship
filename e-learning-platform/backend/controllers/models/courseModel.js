const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    content: { type: [String], required: true } // Array of content items (e.g., URLs)
});

module.exports = mongoose.model('Course', courseSchema);
