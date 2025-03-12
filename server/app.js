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
const swaggerJsdoc = require('swagger-jsdoc');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/userModel');
const cookieParser = require("cookie-parser");

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

// Connect Database
connectDB();

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'MERN API Documentation',
        version: '1.0.0',
        description: 'This is the API documentation for the MERN stack application',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Development server',
        },
    ],
};

// Options for swagger-jsdoc
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Trust the first proxy (e.g., if behind a load balancer or hosting service)
app.set('trust proxy', 1);

// Configure rate limiting
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300, // Allow more requests for authenticated users
});

// Middleware to save logs in both app.log
const logToFile = (message) => {
    const logFilePath = path.join(__dirname, 'app.log');
    let logs = [];
    if (fs.existsSync(logFilePath)) {
        try {
            logs = JSON.parse(fs.readFileSync(logFilePath, 'utf-8'));
        } catch (error) {
            logs = [];
        }
    }
    logs.push({ timestamp: new Date().toISOString(), message });
    fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));
};

// Middlewares

// // Enable CORS for your frontend
// app.use(cors({
//     origin: [
//         'https://dreamy-starship-3a31f6.netlify.app',
//         'https://localhost:3000',
//         'https://localhost:3001',
//         'http://localhost:3000',
//         'http://localhost:3001'
//     ],
//     credentials: true 
//   }));

app.use(cors({
    origin: "*",
    credentials: true, 
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(generalLimiter);
app.use(helmet({
    contentSecurityPolicy: false,
    frameguard: { action: 'deny' },
    hsts: { maxAge: 31536000 },
    xssFilter: true,
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["email", "profile"]
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(107 , profile)
        let userInfo = await User.findOne({ googleId: profile.id });
        if (!userInfo) {
            userInfo = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
            });
            await userInfo.save();
        }
        return done(null, userInfo);
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.use('/auth', authLimiter);

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: "http://localhost:3000",
        failureRedirect: "http://localhost:3000/login"
    })
);

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

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).json({ message: "Internal Server Error" });
});

// Connect Server
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
