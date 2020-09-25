const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://samnicho-portfolio:yQUcqG3rgWEtdInB@cluster0-nzjwi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log('mongoose connected');
});
