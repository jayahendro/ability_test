const bcrypt = require("bcrypt");

import { User } from "database/models";
const saltRounds = 10;

export default async function handler(req, res) {
  const { id } = req.query;
  let data;
  switch (req.method) {
    case "GET":
      data = id;
      break;
    default:
      break;
  }
  res.status(200).json({ data });
}
