import bcrypt from "bcrypt";

import { User } from "database/models";
const saltRounds = 10;
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const filename = `${uuidv4()}.${file.originalname.split(".").pop()}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

const corsMiddleware = cors({
  methods: ["POST"],
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data;
    const { firstName, lastName, idCard, email, phone, password, photo } =
      req.body;

    console.log(`body: ${JSON.stringify(req.body)}`);

    data = await User.findOne({
      where: { email: email },
    });

    if (data) {
      res.status(401).json({ message: "User already existed" });
      return;
    } else {
      let hashPassword;

      await bcrypt.hash(password, saltRounds).then((hash) => {
        hashPassword = hash;
      });

      User.create({
        name: `${firstName} ${lastName}`,
        first_name: firstName,
        last_name: lastName,
        id_card: idCard,
        email: email,
        phone: phone,
        password: hashPassword,
        photo: photo.filename,
      });

      new Promise((resolve, reject) => {
        corsMiddleware(req, res, (err) => {
          if (err) {
            return reject(err);
          }
          upload.single("photo")(req, res, (err) => {
            if (err) {
              return reject(err);
            }
            resolve({ filename: photo.filename });
          });
        });
      });
      res.status(200).json({ data });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
