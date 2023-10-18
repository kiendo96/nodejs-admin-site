const mongoose = require('mongoose');
async function connect() {
    try{
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect successfuly!!!')
    } catch(err) {
        console.log('Connect Failed!!!')
    }
}

module.exports = connect;