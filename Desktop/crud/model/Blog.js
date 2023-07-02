const mongoose = require('mongoose');




const blogSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    body: String
});


const blog = mongoose.model('blog', blogSchema);

module.exports = blog;