const mongoose = require('mongoose')

const uri = process.env.CONNECTION_STRING

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(()=>console.log('Connected to MongoAtlas'))
    .catch(e=>console.log(e));