const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();

app.use(cors());

const PORT = 3000;

// Folder where images are stored
const imageFolder = path.join(__dirname, "images");

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imageFolder);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Home Route
app.get("/", (req, res) => {
    res.send("Photo Gallery API");
});

// Get all photos
app.get("/photos", (req, res) => {

    fs.readdir(imageFolder, (err, files) => {

        if (err) {
            return res.status(500).json({
                error: "Unable to read images folder"
            });
        }

        res.json(files);

    });

});

// Upload a photo
app.post("/upload", upload.single("photo"), (req, res) => {

    res.json({
        message: "Photo uploaded successfully!",
        filename: req.file.filename
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});