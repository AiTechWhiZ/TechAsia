const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const RegisterModel = require("./models/Register");
const ContactModel = require("./models/Contact");
const DBCModel = require("./models/DBC");
const cloudinaryConfig = require("./cloudinary/Cloudinary");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/techAsia")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

cloudinaryConfig();
// Uncomment and configure multer if needed
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => { cb(null, "Images"); },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("image"), (req, res) => {
//   res.send("Image Uploaded")
// });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Password is incorrect");
        }
      } else {
        res.json("No record found");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  RegisterModel.create(req.body)
    .then((techAsia) => res.json(techAsia))
    .catch((err) => res.json(err));
});

// Contact us page
app.post("/contact", (req, res) => {
  ContactModel.create(req.body)
    .then((techAsia) => res.json(techAsia))
    .catch((err) => res.json(err));
});

// Digital business card
app.post("/dbc", (req, res) => {
  DBCModel.create(req.body)
    .then((techAsia) => res.json(techAsia))
    .catch((err) => res.json(err));
});

// Cloudinary
app.post("/fileupload", async (req, res) => {
  const { image } = req.body;

  try {
    // console.log(req);
    // if (!image) {
    //   return res.status(400).json({
    //     message: "image not founded",
    //   });
    // }
    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: "avatar",
      // allowed_formats:["png","jpg",""]
    });
    console.log(uploadedImage)
    res.status(200).json(uploadedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Image upload failed" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
