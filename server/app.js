const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./configs/db');
const routes = require('./routes/index');
const { notFound, welcome } = require('./utils/templates');

dotenv.config(); 

const PORT = process.env.PORT || 5000;
const app = express();

// Connect Database
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);
app.get('/', (req, res) => res.send(welcome));
app.get('*', (req, res) => res.status(404).send(notFound));

// Connect Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

