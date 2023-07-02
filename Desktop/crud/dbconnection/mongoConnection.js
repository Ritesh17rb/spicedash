const mongoose = require('mongoose')

async function createConnection() {

    try {
        // 29QOrFsdXFknMInM

        await mongoose.connect(process.env.DB_URL);
        console.log(`Connected to port ${process.env.PORT}`)

    } catch (e) {
        console.log('Not Connected', e)
    }

    ;
}

module.exports = createConnection