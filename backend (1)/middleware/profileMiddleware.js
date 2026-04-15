import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const extension = file.originalname.split('.').pop();
        cb(null, `${req.user ? req.user._id : 'user'}-${timestamp}.${extension}`);
    }
});

export const upload = multer({ storage });