const mongoose = require('mongoose');

const initDB = () => {
    mongoose.connect(
        'mongodb://admin:Station#24@ds127655.mlab.com:27655/koa-graphql-mongodb-test',
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });
}

module.exports = initDB;