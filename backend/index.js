require('dotenv').config(); 
const express = require("express");
const cors = require('cors');
const app = express();
const mainRouter = require('./routes/index');
const { connectDB } = require('./db');

app.use(cors());
app.use(express.json());
app.use('/api/v1', mainRouter);

async function startServer() {
    try {
        await connectDB();
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`app is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB.');
        console.error(error.message);
        process.exit(1);
    }
}

startServer();