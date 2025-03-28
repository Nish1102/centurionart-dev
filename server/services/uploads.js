  const multer = require('multer');
  const path = require('path');
  // const storageS3 = require('../configs/aws')

  // Set storage engine
  const storage = multer.diskStorage({
    destination: '../uploads/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  // Init upload to local
  const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 }, // Limit file size to 5MB
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).single('myImage');

  // Init upload for multiple images
const uploadMultiple = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).array('images', 10); 

  // Init upload to S3
  // const uploadS3 = multer({
  //     storage: storageS3,
  //     limits: { fileSize: 1000000 }, // Limit file size to 1MB
  //     fileFilter: function (req, file, cb) {
  //       checkFileType(file, cb);
  //     }
  // }).single('myImage');

  // Check file type
  const checkFileType = (file, cb) => {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }

  module.exports = {
      // uploadS3,
      upload,
      uploadMultiple
  };


