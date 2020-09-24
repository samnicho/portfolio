const app = require('./app'); // require the express server

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});