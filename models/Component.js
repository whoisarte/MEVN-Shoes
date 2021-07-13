const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ComponentSchema = new Schema ({
    name: String,
    description: String,
    cost: Number,
    image: String,
    existens: Number,
    topic: String,
});

const Component = mongoose.model('Component', ComponentSchema)
module.exports = Component