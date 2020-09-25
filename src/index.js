const app = require('./app'); // require the express server

// const port = process.env.PORT;

const port = process.env.PORT || process.env.MY_PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});