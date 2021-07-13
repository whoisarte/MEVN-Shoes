const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ItemSchema = new Schema ({
    name: String,
    description: String,
    cost: Number,
    image: String,
    quantity: Number,
    topic: String,
    clave: String
});

const Item = mongoose.model('Item', ItemSchema)
module.exports = Item