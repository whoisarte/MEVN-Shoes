const ComponentSchema = require('../models/Component.js');
module.exports.controller = (app) => {

    // Obtener todos los componentes
    app.get('/components', async(req, res) => {
        try {
            const db = await ComponentSchema.find();
            res.json(db);
        }catch(error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error',
                error
            })
        }
    });
    
    // Agregar un nuevo componente
    app.post('/components', async (req, res) => {
        const newComponent = new ComponentSchema();
        newComponent.name = req.body.name;
        newComponent.description = req.body.description;
        newComponent.cost = req.body.cost;
        newComponent.image = req.body.image;
        newComponent.existens = req.body.existens;
        newComponent.topic = req.body.topic;
        console.log(newComponent);
        await newComponent.save((error, component) => {
            if (error) { console.log(error ); }
            res.send(component);
        });
    });

  // Get con parámetros
  app.get('/api/components/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const OneDB = await ComponentSchema.findOne({_id});
    res.json(OneDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
};