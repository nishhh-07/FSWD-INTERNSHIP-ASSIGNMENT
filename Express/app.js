const express = require('express');
const app = express();

const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

// home route
app.get('/', (req, res) => {
    res.send("Student API is running 🚀");
});

// routes
app.use('/', studentRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});