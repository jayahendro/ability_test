const bcrypt = require("bcrypt");
import { User } from "database/models";
const saltRounds = 10;

export default async function handler(req, res) {
  let data;
  switch (req.method) {
    case "GET":
      data = await User.findAll({
        attributes: [
          "id",
          "name",
          "first_name",
          "last_name",
          "id_card",
          "email",
          "phone",
          "is_verified",
        ],
        include: "roles",
        limit: 100,
      });
      res.status(200).json({ data });
      break;
    case "POST":
      const { firstName, lastName, idCard, email, phone, password } = req.body;
      let hashPassword;
      if (!firstName) {
        return res.status(200).json({ error: "Missing First Name" });
      }
      if (!lastName) {
        return res.status(200).json({ error: "Missing Last Name" });
      }
      if (!idCard) {
        return res.status(200).json({ error: "Missing Id Card" });
      }
      if (!email) {
        return res.status(200).json({ error: "Missing Email" });
      }
      if (!phone) {
        return res.status(200).json({ error: "Missing Phone" });
      }
      if (!password) {
        return res.status(200).json({ error: "Missing Password" });
      }

      data = await User.findOne({
        where: { email: email },
      });

      if (data == null) {
        await bcrypt.hash(password, saltRounds).then((hash) => {
          hashPassword = hash;
        });

        data = await User.create({
          name: `${firstName} ${lastName}`,
          first_name: firstName,
          last_name: lastName,
          id_card: idCard,
          email: email,
          phone: phone,
          password: hashPassword,
        });
      } else {
        data = { error: "User already existed" };
      }

      res.status(200).json({ data });
      break;
    default:
      break;
  }

  res.status(200).json({ data });
}
