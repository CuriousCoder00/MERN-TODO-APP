const express = require('express');
const connectDB = require('./db/dbConnection');
const cors = require('cors');

// Connect to MongoDB
connectDB();
const app = express();
const port = 5000;


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Routes
app.use('/api/auth', require('./router/UserRoutes'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
