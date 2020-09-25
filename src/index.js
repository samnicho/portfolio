const path = require('path');
const express = require('express'); //require express
require('../db/mongoose'); // require the mongoose.js file (automatically connects to the db)
const projectRouter = require('../routers/project'); 
const connectDetailsRouter = require('../routers/connectDetails');
const pageContentRouter = require('../routers/pageContent');

const app = express();
const port = process.env.PORT || 5000;
const publicDirectoryPath = path.join(__dirname, '../client/build')

app.use(express.static(publicDirectoryPath))

// configure express to parse results as JSON
app.use(express.json());

// tell Express to use the imported Routers
app.use(projectRouter);
app.use(connectDetailsRouter);
app.use(pageContentRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});