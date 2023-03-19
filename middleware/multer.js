const multer  = require("multer"),
    //   Datauri = require("datauri"),
      path    = require("path");

// Checks filetypes of uploaded images
function checkFileType(req, file, cb, filetypes = /pdf/){
  // Check Extensions
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check Mimetype
  const mimetype = filetypes.test(file.mimetype);
  //Check File type
  if(mimetype && extname){
    return cb(null, true);
  } else {
    cb("Error","Incorrect file type");
  }
}

// const dUri = new Datauri();
const storage = multer.memoryStorage();

const upload = multer({
    dest: '../public/uploads/',
    storage: storage,
    limits: {
        fileSize: 1024*1024*5 // 5 MB
    },
    fileFilter: function(req, file, cb){
        // const filetypes = /jpeg|jpg|png|gif/;
        checkFileType(req, file, cb /*, filetypes */);
    }
});

// const dataUri = (req) => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

module.exports = {upload /* , dataUri */};
