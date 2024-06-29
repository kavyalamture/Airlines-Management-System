const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 2233;
const cors=require('cors');

app.use(cors())
const { MONGOURI } = require('./keys');

console.log(MONGOURI);
app.use(express.json());

require('./models/user'); // This should correctly reference the models/users.js file
require('./models/flight');
require('./models/review');
require('./models/ticket');

app.use(require('./routes/auth'));
app.use(require('./routes/slight'));
app.use(require('./routes/review'));
app.use(require('./routes/ticket'));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on('error', (err) => {
    console.log("Error connecting to MongoDB:", err);
});
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
