"use strict";
const { Model, DataTypes } = require("sequelize");
import connection from "../connection";

const initProduct = (sequelize, Types) => {
  class Products extends Model {}
  Products.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      star: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Products",
      tableName: "products",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Products;
};

export default initProduct(connection, DataTypes);
