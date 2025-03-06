const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const expressWinston = require('express-winston');
const rateLimit = require('express-rate-limit');
const connectDB = require('./configs/db');
const logger = require('./utils/logger')
const routes = require('./routes/index');
const { notFound, welcome } = require('./utils/templates');

dotenv.config(); 
const PORT = process.env.PORT || 5000;
const app = express();

// Connect Database
connectDB();

// Configure the rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
});
  
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP if you have a complex CSP policy
    frameguard: { action: 'deny' }, // Prevent clickjacking
    hsts: { maxAge: 31536000 }, // Enable HSTS with a max age of 1 year
    xssFilter: true, // Enable XSS filtering
}));
app.use(expressWinston.logger({
    winstonInstance: logger,
    meta: true, // Log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // Customize the default logging message
    expressFormat: true, // Use the default Express/morgan request formatting
    colorize: false, // Color the text and status code
}));
app.use(expressWinston.errorLogger({
    winstonInstance: logger,
      msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms"
}));
  
// Routes
app.use('/api', routes);
app.get('/', (req, res) => res.send(welcome));
app.get('*', (req, res) => res.status(404).send(notFound));

// Error Logging Middleware
app.use(expressWinston.errorLogger({
    winstonInstance: logger
}));

// Connect Server
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);   
    console.log(`Server running on port ${PORT}`)
})