const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const expressWinston = require('express-winston');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./configs/db');
const logger = require('./utils/logger');
const routes = require('./routes/index');
const { notFound, welcome } = require('./utils/templates');
const swaggerSpec = require('./utils/swagger'); 

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

// Middleware to save logs in both app.log and app.log.json
const logToFile = (message) => {
    const logFilePath = path.join(__dirname, 'app.log.json');
    if (!fs.existsSync(logFilePath)) {
        fs.writeFileSync(logFilePath, []);
    }        
    // Append to app.log
    fs.appendFileSync(logFilePath, message + '\n');  
        
};

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(helmet({
    contentSecurityPolicy: false, 
    frameguard: { action: 'deny' }, 
    hsts: { maxAge: 31536000 }, 
    xssFilter: true, 
}));

app.use(expressWinston.logger({
    winstonInstance: logger,
    meta: true, 
    msg: "HTTP {{req.method}} {{req.url}}", 
    expressFormat: true, 
    colorize: false, 
    customStream: {
        write: (message) => logToFile(message),
    }
}));

app.use(expressWinston.errorLogger({
    winstonInstance: logger,
    msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
    customStream: {
        write: (message) => logToFile(message),
    }
}));

// Routes
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/', (req, res) => res.send(welcome));
app.get('*', (req, res) => res.status(404).send(notFound));

// Error Logging Middleware
app.use(expressWinston.errorLogger({
    winstonInstance: logger,
    customStream: {
        write: (message) => logToFile(message),
    }
}));

// Connect Server
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
