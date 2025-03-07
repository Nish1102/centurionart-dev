const swaggerJsdoc = require('swagger-jsdoc');

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
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
}

// Options for swagger-jsdoc
const options = {
    swaggerDefinition,
    apis: ['../routes/*.js'], 
}

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;