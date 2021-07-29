const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://leonardo:seila123@cluster0.jqouf.mongodb.net/test?authSource=admin&replicaSet=atlas-o19nrl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')

mongoose.Promise = global.Promise;

module.exports = mongoose;