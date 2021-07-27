const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://leonardo:seila123@cluster0.jqouf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;