import { Product } from "database/models";

export default async function handler(req, res) {
  let data;
  switch (req.method) {
    case "GET":
      data = await Product.findAll({
        attributes: ["id", "name", "price", "quantity", "star"],
        limit: 100,
      });
      break;
    default:
      break;
  }

  res.status(200).json(data);
}
