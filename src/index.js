const express = require('express'); //require express
require('../db/mongoose'); // require the mongoose.js file (automatically connects to the db)
const projectRouter = require('../routers/project'); 
const connectDetailsRouter = require('../routers/connectDetails');
const pageContentRouter = require('../routers/pageContent');

const app = express();

// configure express to parse results as JSON
app.use(express.json());

// tell Express to use the imported Routers
app.use(projectRouter);
app.use(connectDetailsRouter);
app.use(pageContentRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});