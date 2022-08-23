"use strict";
const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const database = mongoose.connect(process.env.DB_URL, options)
    .then(() => console.log('Connected to database.'))
    .catch(err => console.error('Error connecting to database:', err.message));
module.exports = database;
//# sourceMappingURL=db.config.js.map