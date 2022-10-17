const mongoose = require('mongoose');
const URI = 
'mongodb+srv://joacir:MEaufM9Olx0fUPIY@clusterdev.hk7odfl.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(URI)
    .then(() => console.log('DB is Up!'))
    .catch(() => console.log(err));