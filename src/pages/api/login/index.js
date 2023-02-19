import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { User } from "database/models";
const saltRounds = 10;

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data;
    const { email, password } = req.body;

    data = await User.findOne({
      where: { email: email },
    });

    if (data) {
      const match = await compare(password, data.password);

      if (!match) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
      }

      if (!data.is_verified) {
        res.status(401).json({ message: "Contact your administrator" });
        return;
      }

      const token = sign({ id: data.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TTL,
      });

      res.status(200).json({ data, token });
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
