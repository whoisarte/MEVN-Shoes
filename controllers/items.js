const ItemSchema = require('../models/Item.js');
module.exports.controller = (app) => {
    app.get('/items', async(req, res) => {
        try {
            const db = await ItemSchema.find();
            res.json(db);
        } catch(error){
            return res.status(400).json({
                mensaje: 'Ocurrio un error',
                error
            })
        }
    });

    app.post('/items',async (req, res) => {
        const newItem = new ItemSchema();
        newItem.name = req.body.name;
        newItem.description = req.body.description;
        newItem.cost = req.body.cost;
        newItem.image = req.body.image;
        newItem.quantity = req.body.quantity;
        newItem.topic = req.body.topic;
        newItem.clave = req.body.clave;
        console.log(newItem);
        await newItem.save((error, item) => {
            if (error) { console.log(error); }
            res.send(item);
        });
    });

    app.get('/api/items/:id', async (req,res) => {
        const _id = req.params.id;
        try {
            const OneDB = await ItemSchema.findOne({_id});
            res.json(OneDB);
        } catch (error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error',
                error
            })
        }
    });
};