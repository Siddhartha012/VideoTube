/*import multer from "multer";

import path from "path";

 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     // cb(null, file.fieldname + '-' + uniqueSuffix)
     cb(null, file.originalname)
    } 
  })

  const upload = multer({ storage });

export default upload;

*/
/*  
  export const upload = multer({ 
    storage: storage 
}
)*/


import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure the temp directory exists
const tempDir = "./public/temp";
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);
    cb(null, `${basename}-${uniqueSuffix}${extension}`);
  }
});

const upload = multer({ storage });

export default upload;
