"use strict";
const { Model, DataTypes } = require("sequelize");
import connection from "../connection";

const initUser = (sequelize, Types) => {
  class User extends Model {}
  User.init(
    {
      name: Types.STRING,
      first_name: Types.STRING,
      last_name: Types.STRING,
      id_card: Types.STRING,
      email: Types.STRING,
      phone: Types.STRING,
      password: Types.STRING,
      photo: Types.STRING,
      is_verified: Types.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};

export default initUser(connection, DataTypes);
