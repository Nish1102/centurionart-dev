const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
require('dotenv').config(); // .env से credentials लोड करें

// AWS Configuration
const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// Multer S3 Storage
const storageS3 = multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET, // **Ensure this is correctly set in .env**
    acl: 'public-read', // Publicly accessible images
    metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
        cb(null, `uploads/${Date.now().toString()}-${file.originalname}`);
    }
});

module.exports = storageS3;
